import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(),
  ],
  
  build: {
        cssCodeSplit: false,
        rollupOptions: {
          input: {
            app: './src/main.tsx',
          },
        }
      }
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// export default defineConfig({
//   plugins: [react(), cssInjectedByJsPlugin()],
  
//   build: {
//     cssCodeSplit: false, // Disable CSS code splitting
//     rollupOptions: {
//       input: {
//         app: './src/main.tsx', // Your entry point
//       },
//       output: {
//         // Define how the file names should be structured
//         entryFileNames: 'assets/js/calenderWidget.js', // Keep the entry point name (e.g., app.js)
//         chunkFileNames: 'assets/js/calenderWidget-hash.js', // Add a hash for chunk files
//       }
//     }
//   }
// })