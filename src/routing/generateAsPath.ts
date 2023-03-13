import { stringify } from 'query-string';
import {getCultureTokensToLangCode, supportedTokens} from "./routes.mjs";
import { compile } from 'path-to-regexp';
import {RouteValues} from "./types";

export const removeEmptyKeysFromObjectSafe = (
    obj: Record<string, any> | undefined,
): Record<string, any> | undefined => {
    if (!obj || !Object.values(obj).length) return undefined;

    return removeEmptyKeysFromObject(obj);
};

export const removeEmptyKeysFromObject = (obj: Record<string, any>): Record<string, any> => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => {
            if (Array.isArray(value)) {
                return value.length > 0;
            }
            return value != null;
        }),
    );
};


export const stringifyQuery = (query: Record<any, any>): string => {
    const trimmed = removeEmptyKeysFromObject(query);
    return stringify(trimmed, {
        // encode: false, -> you can opt in opt out see docs
        // arrayFormat: 'bracket-separator', -> there is actually ton of ways how to process arrays, always match one with your rest api
        // arrayFormatSeparator: ';', -> same as above, use this to be able to parse and split properly query in rest api format and vice versa
        skipEmptyString: true,
        skipNull: true,
        sort: false,
    });
};


const transformToAsPath = (
    pathname: string,
    query: number | string | null | undefined,
    hash?: string,
) => {
    let aliasAsPath = pathname;
    if (query) aliasAsPath += `?${query}`;
    if (hash) aliasAsPath += `#${hash}`;
    return aliasAsPath;
};

interface PathLocalisationParams {
    route: RouteValues;
    locale: typeof supportedTokens[number];
    query?: Record<string, any> | null;
    params?: Record<string, any>;
    hash?: string;
}


/**
 * @description function takes Route and locale, and can optionally take query object and/or params object
 * then it translates href path without lang prefix ie. /auto/1234/bmw instead cs/auto/123/bmw etc.
 * */
export const generateAsPath = ({
    route,
    locale,
    query,
    params,
    hash
}: PathLocalisationParams): string => {

    const localisedRoute = route.urls[getCultureTokensToLangCode(locale)];
    const pathnameWithParams = compile(localisedRoute, {encode: encodeURIComponent})(params);
    const queryString = query && stringifyQuery(query);
    return `${transformToAsPath(pathnameWithParams, queryString, hash)}`;
};

