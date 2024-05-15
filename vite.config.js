import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    root: "src",
    build: {
      outDir: "../dist",
    },
    server: {
      open: true,
    },
    define: {
      "process.env": {
        VITE_API_KEY: env.VITE_API_KEY,
        VITE_AUTH_DOMAIN: env.VITE_AUTH_DOMAIN,
        VITE_DATABASE_URL: env.VITE_DATABASE_URL,
        VITE_PROJECT_ID: env.VITE_PROJECT_ID,
        VITE_STORAGE_BUCKET: env.VITE_STORAGE_BUCKET,
        VITE_MESSAGING_SENDER_ID: env.VITE_MESSAGING_SENDER_ID,
        VITE_APP_ID: env.VITE_APP_ID,
        VITE_MEASUREMENT_ID: env.VITE_MEASUREMENT_ID,
      },
    },
  };
});
