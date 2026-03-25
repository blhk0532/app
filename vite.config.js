import {
    defineConfig
} from 'vite';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/js/inertia/app.tsx',
                'resources/js/app.tsx',
                'resources/js/app.js',
                'resources/css/app.css',
                'resources/css/theme.css',
                'resources/css/filament/admin/theme.css',
                'resources/css/filament/app/theme.css',
                'resources/css/filament/booking/theme.css',
                'resources/css/filament/data/theme.css',
                'resources/css/filament/queue/theme.css',
                'resources/css/filament/chat/theme.css',
                'resources/css/filament/calendar/theme.css',
                'resources/css/filament/dev/theme.css',
                'resources/css/filament/notify/theme.css',
                'resources/css/filament/tools/theme.css',
                'resources/css/filament/email/theme.css',
                'resources/css/filament/cachet/theme.css',
                'resources/css/filament/geo/theme.css',
                'resources/css/filament/manager/theme.css',
                'resources/css/filament/dialer/theme.css',
                'resources/css/filament/finance/theme.css',
                'resources/css/filament/partner/theme.css',
                'resources/css/filament/script/theme.css',
                'resources/css/filament/sheets/theme.css',
                'resources/css/filament/stats/theme.css',
                'resources/css/filament/super/theme.css',
                'resources/css/filament/company/theme.css',
                'resources/css/filament/private/theme.css',
                'resources/css/filament/system/theme.css',
                ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js/inertia', import.meta.url)),
        },
    },
    server: {
        cors: true,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    build: {
        rollupOptions: {
            // Tailwind CSS legitimately dominates build time across 14 CSS entries;
            // disable the Rolldown plugin-timings threshold warning.
            checks: {
                pluginTimings: false,
            },
        },
    },
    envPrefix: ["VITE_", "APP_", "DB_"],
});
