<?php

use function Laravel\Folio\{name};

name('mentor.docs.api');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Mentor', 'href' => route('mentor.index')], ['text' => 'Docs', 'href' => route('mentor.docs.index')], ['text' => 'API']]" />

        <div class="flex items-center justify-center w-full pt-20">
            <div class="w-full max-w-3xl">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    REST API
                </h1>
            </div>
        </div>

        <div class="max-w-3xl mx-auto mt-12 prose prose-sm dark:prose-invert max-w-none">
            <h2>Authentication</h2>
            <p>The API uses Laravel Sanctum for authentication. Include your token in the Authorization header:</p>
            <pre><code>Authorization: Bearer YOUR_TOKEN_HERE
</code></pre>

            <h2>Getting Started</h2>
            <ol>
                <li>Register a user account</li>
                <li>Get your API token from your profile settings</li>
                <li>Include the token in your API requests</li>
            </ol>

            <h2>Base URL</h2>
            <pre><code>https://api.example.com/api/v1
</code></pre>

            <h2>Response Format</h2>
            <p>All responses are JSON formatted:</p>
            <pre><code>{
  "data": { ... },
  "message": "Success",
  "status": 200
}
</code></pre>

            <h2>Common Status Codes</h2>
            <ul>
                <li><code>200</code> - OK</li>
                <li><code>201</code> - Created</li>
                <li><code>400</code> - Bad Request</li>
                <li><code>401</code> - Unauthorized</li>
                <li><code>403</code> - Forbidden</li>
                <li><code>404</code> - Not Found</li>
                <li><code>500</code> - Server Error</li>
            </ul>

            <h2>Rate Limiting</h2>
            <p>API requests are rate limited to 60 requests per minute per user.</p>

            <h2>Pagination</h2>
            <p>List endpoints support pagination:</p>
            <pre><code>GET /api/v1/resources?page=1&per_page=20
</code></pre>

            <h2>Error Handling</h2>
            <p>Errors are returned with appropriate status codes:</p>
            <pre><code>{
  "message": "Error message",
  "status": 400,
  "errors": {
    "field": ["Error details"]
  }
}
</code></pre>
        </div>
    </div>
</x-layouts.marketing>
