import {cultureTokenMap, routes, supportedCountries} from "../routing/routes.mjs";

/** Outgoing format example:
 * @example [{
 *   source: '/cs-cz/prohlidka-meho-pokladu', // <- incomming url
 *   destination: '/myTreasure', // <- target route based on filesystem router but in express notation
 *   locale: false
 * }, ...]
 */
export const generateRewrites = () => {

    const rewrites = Object.values(routes).map((route) => {
        const destination = route.template

        const sources = Object.entries(route.urls).map(([language, source]) => {
            if (language !== 'en') {
                const countryforRewrite = cultureTokenMap[language]
                const sourceforRewrite = `/${countryforRewrite}${source}`
                return {source: sourceforRewrite, locale: false, destination}
            }
           return supportedCountries.map(country => {
                const sourceforRewrite = `/${language}-${country}${source}`
                return {source: sourceforRewrite, locale: false, destination}
            })
        })

        return sources.flat()

    }).flat()
    //destination - template
    //source: /lang-country/asPath
    return rewrites.filter(route=> route.destination !== '/')
}


export const generatedRewrites = generateRewrites()
