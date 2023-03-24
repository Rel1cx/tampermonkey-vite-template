import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: 'tampermonkey-vite-template',
                namespace: '',
                description: '',
                author: '',
                match: ['https://www.bing.com/*'],
                'run-at': 'document-body',
                icon: 'https://www.bing.com/favicon.ico',
                source: '',
                supportURL: '',
                updateURL: '',
                downloadURL: '',
            },
            build: {
                // externalGlobals: {},
            },
        }),
    ],
    build: {
        minify: true,
        target: 'ES2015',
        rollupOptions: {
            treeshake: true,
        },
    },
})
