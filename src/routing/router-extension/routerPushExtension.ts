import {ParsedUrlQueryInput} from "querystring";
import {generateAsPath, removeEmptyKeysFromObjectSafe} from "../generateAsPath";
import {supportedTokens} from "../routes.mjs";
import Router from 'next/router';
import {LocalisedRouterTransition} from "../types";
import {getParamsFromQueryObject} from "../getParamsFromQueryObject";


/**
 * @description this enhances useRouter/Router push methods, do not use separately
 * */
export const localisedRouterPush: LocalisedRouterTransition = (route, query, options, queryKeysToOmit) => {
    //note: you need to clean up {Id:undefined, myPrice: null} it would mess up url for example https//:marcel.konjata.org/info?my-salary=null&sarcasm=undefined
    const clensedQuery = removeEmptyKeysFromObjectSafe(query);
    const { transformedQuery = undefined, paramsFromQuery = undefined } = getParamsFromQueryObject(
        route,
        clensedQuery,
        queryKeysToOmit,
    );

    const asHref = generateAsPath({
        route,
        locale: (options?.locale as (typeof supportedTokens[number])) ?? Router.locale,
        query: transformedQuery,
        params: paramsFromQuery,
    });
    return Router.push(
        {pathname: route.template, query: {...clensedQuery} as ParsedUrlQueryInput},
        asHref,
        {
            ...options,
            locale: options?.locale ?? Router.locale,
        },
    );
};


