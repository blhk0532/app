import {
    defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/js/app.tsx',
                'resources/css/app.css',
                'resources/js/app.js',
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
                'resources/css/filament/super/theme.css',
                'resources/css/filament/geo/theme.css',
                ],
            refresh: true,
        }),
        tailwindcss(),
    ],
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
