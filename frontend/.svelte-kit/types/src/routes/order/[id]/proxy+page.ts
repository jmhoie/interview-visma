// @ts-nocheck
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = ({ params }: Parameters<PageLoad>[0]) => {
	return {
		id: params.id
	};
};
