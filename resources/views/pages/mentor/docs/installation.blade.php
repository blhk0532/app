<?php

use function Laravel\Folio\{name};

name('mentor.docs.installation');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Mentor', 'href' => route('mentor.index')], ['text' => 'Docs', 'href' => route('mentor.docs.index')], ['text' => 'Installation']]" />

        <div class="flex items-center justify-center w-full pt-20">
            <div class="w-full max-w-3xl">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Installation Guide
                </h1>
            </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12 prose prose-sm dark:prose-invert max-w-none">
            <h2>Requirements</h2>
            <ul>
                <li>PHP 8.4 or higher</li>
                <li>Composer</li>
                <li>Node.js and npm</li>
                <li>PostgreSQL or MySQL</li>
            </ul>

            <h2>Clone the Repository</h2>
            <pre><code>git clone &lt;your-repo-url&gt;
cd your-project
</code></pre>

            <h2>Install PHP Dependencies</h2>
            <pre><code>composer install
</code></pre>

            <h2>Set Up Environment</h2>
            <pre><code>cp .env.example .env
php artisan key:generate
</code></pre>

            <h2>Configure Database</h2>
            <p>Update your <code>.env</code> file with database credentials:</p>
            <pre><code>DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database
DB_USERNAME=your_user
DB_PASSWORD=your_password
</code></pre>

            <h2>Run Migrations</h2>
            <pre><code>php artisan migrate
</code></pre>

            <h2>Install Node Dependencies</h2>
            <pre><code>npm install
</code></pre>

            <h2>Build Assets</h2>
            <pre><code>npm run build
</code></pre>

            <h2>Start Development Server</h2>
            <pre><code>./vendor/bin/sail up -d
npm run dev
</code></pre>

            <p>Your application should now be running at <code>http://localhost</code></p>
        </div>
    </div>
</x-layouts.marketing>
