import {supportedTokens} from "./src/routing/routes.mjs";
import {generatedRewrites} from "./src/next.config.utils/generateRewrites.mjs";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    i18n: {locales: [...supportedTokens, 'default'], defaultLocale: 'default', localeDetection: false},
    async rewrites() {
        return generatedRewrites
    },
}

export default nextConfig
