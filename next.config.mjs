/* eslint-disable @typescript-eslint/require-await */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '',
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["sk", "en", "pl"],
    defaultLocale: "sk",
  },
  async headers() {
    return [
        {
            // Sets security headers for all routes
            source: '/(.*)',
            headers: [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=63072000; includeSubDomains; preload'
                }
            ],
        },
    ];
},
};

export default config;
