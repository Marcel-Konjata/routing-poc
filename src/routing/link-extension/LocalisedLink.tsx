
import Link, { LinkProps } from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

import {mergeParamAndQueryObjects} from "../mergeParamAndQueryObjects";
import {generateAsPath} from "../generateAsPath";
import omit from 'lodash/omit';
import {useRouter} from "next/router";
import {supportedTokens} from "../routes.mjs";
import {RouteValues} from "../types";

interface LocalisedLinkProps extends Omit<LinkProps, 'href' | 'as'>{
	forceLocale?: typeof supportedTokens[number];
	route: RouteValues;
	query?: Record<string, unknown>;
	scrollToTop?: boolean;
	params?: Record<string, unknown>;
	queriesToOmit?: Array<string>
}
/**
 * @description this is wrapper component above native next/link
 * which under the hood wraps current locale and parses mask for that language and at same time refers to proper route in pages
 * */
const LocalisedLink: FC<LocalisedLinkProps & PropsWithChildren> = ({
	route,
	query,
	shallow,
	scrollToTop = true,
	forceLocale,
	passHref,
	params,
	queriesToOmit,
	children,
	...linkProps
}) => {
	const currentLanguage = useRouter().locale;

	const parsedQuery = mergeParamAndQueryObjects(params, query);
	const cleansedQuery = queriesToOmit?.length ? omit(parsedQuery, queriesToOmit) : parsedQuery;
	const maskedPath = generateAsPath({
		route,
		locale: currentLanguage,
		query: cleansedQuery,
		params,
	});
	return (
		<Link
			locale={forceLocale ?? currentLanguage}
			href={{ pathname: route.template, query: parsedQuery }}
			shallow={shallow}
			scroll={scrollToTop}
			as={maskedPath}
			passHref={passHref}
			{...linkProps}
		>
			{children}
		</Link>
	);
};

export default LocalisedLink;
