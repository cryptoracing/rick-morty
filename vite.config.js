import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        include: ['axios']
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: '/src/main.js'
            }
        }
    }
});
