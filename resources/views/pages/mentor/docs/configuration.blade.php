<?php

use function Laravel\Folio\{name};

name('mentor.docs.configuration');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Mentor', 'href' => route('mentor.index')], ['text' => 'Docs', 'href' => route('mentor.docs.index')], ['text' => 'Configuration']]" />

        <div class="flex items-center justify-center w-full pt-20">
            <div class="w-full max-w-3xl">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Configuration
                </h1>
            </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12 prose prose-sm dark:prose-invert max-w-none">
            <h2>Application Configuration</h2>
            <p>Configuration files are located in the <code>config/</code> directory. Key files include:</p>
            <ul>
                <li><code>config/app.php</code> - Application settings</li>
                <li><code>config/database.php</code> - Database configuration</li>
                <li><code>config/filament.php</code> - Filament settings</li>
                <li><code>config/queue.php</code> - Queue configuration</li>
            </ul>

            <h2>Environment Variables</h2>
            <p>Configure your application using the <code>.env</code> file:</p>
            <pre><code>APP_NAME="Your App"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=app_database
DB_USERNAME=postgres
DB_PASSWORD=password

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
</code></pre>

            <h2>Mail Configuration</h2>
            <pre><code>MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_FROM_ADDRESS=from@example.com
</code></pre>

            <h2>Redis Configuration</h2>
            <p>For caching and queues, configure Redis:</p>
            <pre><code>REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
</code></pre>

            <h2>File Storage</h2>
            <pre><code>FILESYSTEM_DISK=local
# or for S3:
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_DEFAULT_REGION=us-east-1
</code></pre>
        </div>
    </div>
</x-layouts.marketing>
