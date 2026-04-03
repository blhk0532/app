<?php

use function Laravel\Folio\{name};

name('mentor.getting-started');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Mentor', 'href' => route('mentor.index')], ['text' => 'Getting Started']]" />

        <div class="flex items-center justify-center w-full pt-20">
            <div class="w-full max-w-3xl">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                    Getting Started
                </h1>
                <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Everything you need to know to get up and running.
                </p>
            </div>
        </div>

        <div class="grid max-w-3xl gap-8 mx-auto mt-16">
            <!-- Prerequisites -->
            <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Prerequisites</h2>
                <div class="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                    <p>✓ PHP 8.4+</p>
                    <p>✓ Laravel 13</p>
                    <p>✓ Node.js & npm</p>
                    <p>✓ PostgreSQL or MySQL</p>
                </div>
            </div>

            <!-- Installation -->
            <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Installation</h2>
                <div class="mt-4 space-y-3">
                    <p class="text-slate-600 dark:text-slate-400">Clone the repository and install dependencies:</p>
                    <pre class="p-4 overflow-x-auto bg-slate-900 dark:bg-slate-950 rounded-lg text-slate-100 text-sm"><code>git clone &lt;repository-url&gt;
cd app
composer install
npm install
cp .env.example .env
php artisan key:generate</code></pre>
                </div>
            </div>

            <!-- Configuration -->
            <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Configuration</h2>
                <div class="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                    <p>Update your .env file with your database credentials and other settings.</p>
                    <pre class="p-4 overflow-x-auto bg-slate-900 dark:bg-slate-950 rounded-lg text-slate-100 text-sm"><code>php artisan migrate
php artisan db:seed
npm run dev</code></pre>
                </div>
            </div>

            <!-- Running the App -->
            <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Running the Application</h2>
                <div class="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                    <p>Start the development server:</p>
                    <pre class="p-4 overflow-x-auto bg-slate-900 dark:bg-slate-950 rounded-lg text-slate-100 text-sm"><code>./vendor/bin/sail up -d
# In a new terminal:
npm run dev</code></pre>
                    <p>Visit http://localhost in your browser.</p>
                </div>
            </div>
        </div>
    </div>
</x-layouts.marketing>
