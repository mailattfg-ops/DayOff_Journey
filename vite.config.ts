import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "development" ? "/" : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx"],
  },
  plugins: [
    react(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'utils-vendor': ['date-fns', 'clsx', 'tailwind-merge'],
          'radix-vendor': [
            '@radix-ui/react-slot',
            '@radix-ui/react-accordion',
            '@radix-ui/react-popover',
            '@radix-ui/react-select'
          ],
          'calendar-vendor': ['react-day-picker'],
          'icons-vendor': ['lucide-react']
        }
      }
    }
  }
});
