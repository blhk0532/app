import '../../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './utils/theme';

const appName = process.env.VITE_APP_NAME || 'Nordic Digital Solutions';
const reloadKey = 'vite-preload-error-reloaded';

window.addEventListener('vite:preloadError', () => {
    if (sessionStorage.getItem(reloadKey) === '1') {
        return;
    }

    sessionStorage.setItem(reloadKey, '1');
    window.location.reload();
});

window.addEventListener('load', () => {
    sessionStorage.removeItem(reloadKey);
});

const inertiaRoot = document.querySelector('[data-page]');

if (!inertiaRoot) {
    console.warn('Livewire ⚡ Detected: Inertia not initialized.');
} else {
    initializeTheme();

    createInertiaApp({
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) =>
            resolvePageComponent(
                `./pages/${name}.tsx`,
                import.meta.glob('./pages/**/*.tsx'),
            ),
        setup({ el, App, props }) {
            const root = createRoot(el);

            root.render(<App {...props} />);
        },
        progress: {
            color: '#4B5563',
        },
    });

    // This will set light / dark mode on load...
    initializeTheme();
}
