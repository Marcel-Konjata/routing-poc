import {RouteValues, TransitionOptions} from "./types";
import pick from "lodash/pick";
import omit from "lodash/omit";

/**
 * @description this function is used as interceptor that pick router.query object at places that you have to use
 * localisation or function that uses params={slug: value} query={key: value}
 * by default router.query has all the keys and do not differ between /:param and ?query=val
 */
export const getParamsFromQueryObject = (
    route: RouteValues,
    queryToProcess: Record<any, any> | undefined,
    queryKeysToOmit?: string[]
) => {
    const params = route.params;

    const cleansedParams = params ? pick(queryToProcess, params) : undefined;
    const paramsFromQuery = cleansedParams && Object.values(cleansedParams).length ? cleansedParams : undefined;

    //after splitting params you need to return query object IF object HAS some keys
    const cleansedQuery = params && queryToProcess ? omit(queryToProcess, params) : queryToProcess;
    const sanitizedQuery = queryKeysToOmit.length && cleansedQuery ? omit(cleansedQuery, queryKeysToOmit): cleansedQuery
    //sanitized for "clean up query object", basically you need to remove for as path {query: {param: paramValue}}
    //that is from NextJs default url handling for routing -> href : {pathname, query, url}, params are part of Query object of nextRouter
    const transformedQuery = sanitizedQuery && Object.values(sanitizedQuery).length ? sanitizedQuery : undefined;

    return {
        paramsFromQuery,
        transformedQuery,
    };
};
