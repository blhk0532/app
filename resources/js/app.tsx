import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

createInertiaApp({
	title: (title) => (title ? `${title} - ${import.meta.env.VITE_APP_NAME}` : import.meta.env.VITE_APP_NAME),
	resolve: (name) =>
		resolvePageComponent(
			`./inertia/Pages/${name}.tsx`,
			import.meta.glob('./inertia/Pages/**/*.tsx'),
		),
	setup({ el, App, props }) {
		createRoot(el).render(<App {...props} />);
	},
});
