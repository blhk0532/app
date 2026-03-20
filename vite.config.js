import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: [
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
});
