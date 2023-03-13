import {LocalisedRouterTransition} from "../types";
import Router from "next/router";
import {generateAsPath, removeEmptyKeysFromObjectSafe} from "../generateAsPath";
import {supportedTokens} from "../routes.mjs";
import {getParamsFromQueryObject} from "../getParamsFromQueryObject";

/**
 * @description this enhances useRouter/Router replace methods, do not use separately
 * */
export const localisedRouterReplace: LocalisedRouterTransition = (route, query, options, queryKeysToOmit) => {
    const clensedQuery = removeEmptyKeysFromObjectSafe(query);
    const { transformedQuery = undefined, paramsFromQuery = undefined } = getParamsFromQueryObject(
        route,
        clensedQuery,
        queryKeysToOmit
    );
    const asHref = generateAsPath({
        route,
        locale: (options?.locale as (typeof supportedTokens[number])) ?? Router.locale,
        query: transformedQuery,
        params: paramsFromQuery,
    });
    return Router.replace({ pathname: route.template, query }, asHref, {
        ...options,
        locale: options?.locale ?? Router.locale,
    });
};
