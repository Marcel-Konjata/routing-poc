import { NextRouter, useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

import {localisedRouterPush } from "./routerPushExtension";
import {LocalisedRouterTransition, RouteTemplateName} from "../types";
import {localisedRouterReplace} from "./routerReplaceExtension";

export interface UseLocalisedRouter extends Omit<NextRouter, 'route' | 'push' | 'replace'> {
    route: RouteTemplateName;
    push: LocalisedRouterTransition;
    replace: LocalisedRouterTransition;
}

export const useLocalisedRouter = (): UseLocalisedRouter => {
    const nextRouter = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const push = useCallback(localisedRouterPush, [nextRouter]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const replace = useCallback(localisedRouterReplace, [nextRouter]);

    //note: this is really important to wrap in memo otherwise you will end up with re-render hell in every useEffect that has router as dependency
    return useMemo(
        () => ({
            ...nextRouter,
            route: nextRouter.route,
            push,
            replace,
        }),
        [nextRouter, push, replace],
    );
};

