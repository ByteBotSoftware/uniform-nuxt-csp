import type { ManifestV2 } from "@uniformdev/context";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // "nuxt-security",
    "@uniformdev/uniform-nuxt",
  ],
  // security: {
  //   headers: {
  //     // To allow for nuxt dev tools in development
  //     crossOriginEmbedderPolicy:
  //       process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
  //   },
  // },
  uniform: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    readOnlyApiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL,
    manifest: {} as ManifestV2,
    defaultConsent: true,
  },
});
