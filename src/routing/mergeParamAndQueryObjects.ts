type Params = Record<string, unknown>;
/**
 * @description small helper function that merges query and param objects into
 * one passed down to parsers or undefined if there are empty objects or not defined at all
 * */
export const mergeParamAndQueryObjects = (
	param: Params | undefined,
	query: Record<any, any> | undefined,
): Record<any, any> | undefined => {
	const queryWithParam = { ...(param && { ...param }), ...(query && { ...query }) };
	return Object.keys(queryWithParam).length !== 0 ? queryWithParam : undefined;
};
