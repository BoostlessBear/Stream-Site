import redirects from '$lib/redirects.json';
import type { ParamMatcher } from '@sveltejs/kit';

type Redirect = {
  path: string,
  dest: string
}

export const match = ((param) => {
  const paths = redirects.map((x: Redirect) => x.path);
  return paths.includes(param);
}) satisfies ParamMatcher;