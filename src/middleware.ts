// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
	// Evita assets, api, etc.
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
