import manifest from "./lib/uniform/contextManifest.json";
import type { ManifestV2 } from "@uniformdev/context";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/styles/global.css"],
  modules: ["@uniformdev/uniform-nuxt", "nuxt-security"],
  uniform: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    readOnlyApiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL,
    edgeApiHost: process.env.UNIFORM_CLI_BASE_EDGE_URL,
    manifest: manifest as ManifestV2,
    defaultConsent: true,
    outputType: "standard",
  },
  security: {
    headers: {
      // To allow for nuxt dev tools in development
      // and uniform preview in staging
      crossOriginEmbedderPolicy: "unsafe-none",
      // Allows for the iframe to be embedded in the Uniform preview
      crossOriginResourcePolicy: "cross-origin",
      // Allows for the iframe to be embedded in the Uniform preview
      referrerPolicy: "origin",
      contentSecurityPolicy: {
        "frame-ancestors": ["'self'", "https://uniform.app"],
      },
    },
  },
});
