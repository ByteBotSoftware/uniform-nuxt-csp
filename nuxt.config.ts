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
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
      // xXSSProtection: '1; mode=block',
      crossOriginResourcePolicy: "cross-origin",
      contentSecurityPolicy: {
        // "base-uri": ["'self'"],
        // "font-src": ["'self'", "https:", "data:"],
        // "form-action": ["'self'"],
        "frame-ancestors": [
          "'self'",
          "https://uniform.app",
          // "https://app.contentstack.com",
        ],
        // "img-src": ["'self'", "https:", "data:"],
        // "object-src": ["'none'"],
        // "script-src-attr": ["'none'"],
        // "style-src": ["'self'", "https:", "'unsafe-inline'"],
        // "upgrade-insecure-requests": true,
        "child-src": false,
        "connect-src": false,
        "default-src": false,
        "font-src": false,
        "frame-src": false,
        "img-src": false,
        "manifest-src": false,
        "media-src": false,
        "object-src": false,
        "prefetch-src": false,
        "script-src": false,
        "script-src-elem": false,
        "script-src-attr": false,
        "style-src": false,
        "style-src-elem": false,
        "style-src-attr": false,
        "worker-src": false,
        "base-uri": false,
        sandbox: false,
        "form-action": false,
        "navigate-to": false,
        "report-uri": false,
        "report-to": false,
        "upgrade-insecure-requests": false,
      },
    },
  },
});
