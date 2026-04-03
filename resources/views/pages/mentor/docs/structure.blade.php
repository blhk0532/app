<?php

use function Laravel\Folio\{name};

name('mentor.docs.structure');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Mentor', 'href' => route('mentor.index')], ['text' => 'Docs', 'href' => route('mentor.docs.index')], ['text' => 'Structure']]" />

        <div class="flex items-center justify-center w-full pt-20">
            <div class="w-full max-w-3xl">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Project Structure
                </h1>
            </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12 prose prose-sm dark:prose-invert max-w-none">
            <h2>Directory Overview</h2>
            <pre><code>app/
├── Actions/           # Domain actions and use cases
├── Filament/          # Filament admin panels
├── Http/              # Controllers and middleware
├── Jobs/              # Queue jobs
├── Livewire/          # Livewire components
├── Models/            # Eloquent models
├── Policies/          # Authorization policies
└── Providers/         # Service providers

config/               # Configuration files
database/
├── factories/         # Model factories
├── migrations/        # Database migrations
└── seeders/           # Database seeders

public/               # Public assets and files
resources/
├── css/               # Stylesheets
├── js/                # JavaScript files
└── views/
    ├── components/    # Blade components
    ├── layouts/       # Layout files
    ├── livewire/      # Livewire view templates
    └── pages/         # Folio pages

routes/               # Route definitions
storage/              # Application storage
tests/                # Test files
</code></pre>

            <h2>Key Directories</h2>

            <h3>app/</h3>
            <p>Contains your application code. Organized by responsibility:</p>
            <ul>
                <li><strong>Models</strong> - Database models and relationships</li>
                <li><strong>Controllers</strong> - HTTP request handlers</li>
                <li><strong>Actions</strong> - Business logic and use cases</li>
                <li><strong>Jobs</strong> - Queued jobs</li>
            </ul>

            <h3>resources/views/pages/</h3>
            <p>Folio pages for file-based routing. Each Blade file becomes a route:</p>
            <ul>
                <li><code>pages/index.blade.php</code> → <code>/</code></li>
                <li><code>pages/about.blade.php</code> → <code>/about</code></li>
                <li><code>pages/blog/index.blade.php</code> → <code>/blog</code></li>
                <li><code>pages/blog/show.blade.php</code> → <code>/blog/{id}</code></li>
            </ul>

            <h3>database/migrations/</h3>
            <p>Database migration files. Run with:</p>
            <pre><code>php artisan migrate
</code></pre>
        </div>
    </div>
</x-layouts.marketing>
