import {routes} from "./routes.mjs";

const templates = Object.values(routes).map(value => value.template)

export type RouteTemplateName = typeof templates[number]

export interface RouteValues {
    template: string,
    urls: {
        cs: string,
        en: string
        es: string
        pl: string
        sk: string
    },
    isStatic?: boolean,
    params?: Array<string> | string
}

// copied and pasted from Next because it's not exported
export interface TransitionOptions {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
}

export interface LocalisedRouterTransition {
    (route: RouteValues, query?: Record<string, any>, options?: TransitionOptions, queryKeysToOmit?: string[]): Promise<boolean>;
}
