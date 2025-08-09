import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Truck Cash Pro 1
// This file configures Vite to use the React plugin.  It enables fast
// development mode and a production build suitable for deployment on
// platforms like Vercel.

export default defineConfig({
  plugins: [react()],
  build: {
    // The default build settings are sufficient for this project.  The
    // output will be placed in the `dist` directory when `npm run build`
    // is executed.  No special aliases or optimizations are required.
  }
});
