<?php

use function Laravel\Folio\{name};

name('mentor.docs.index');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Mentor', 'href' => route('mentor.index')], ['text' => 'Documentation']]" />

        <div class="flex items-center justify-center w-full pt-20">
            <div class="w-full max-w-3xl">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                    Documentation
                </h1>
                <p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Comprehensive guides and documentation for the platform.
                </p>
            </div>
        </div>

        <!-- Documentation Sections -->
        <div class="grid max-w-3xl gap-8 mx-auto mt-16">
            <!-- Getting Started Section -->
            <div class="space-y-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Getting Started</h2>
                <div class="space-y-2">
                    <a href="{{ route('mentor.docs.installation') }}" class="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                        <h3 class="font-semibold text-slate-900 dark:text-slate-100">Installation</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Step-by-step installation guide</p>
                    </a>
                    <a href="{{ route('mentor.docs.configuration') }}" class="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                        <h3 class="font-semibold text-slate-900 dark:text-slate-100">Configuration</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Configuration options and setup</p>
                    </a>
                </div>
            </div>

            <!-- Architecture Section -->
            <div class="space-y-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Architecture</h2>
                <div class="space-y-2">
                    <a href="{{ route('mentor.docs.structure') }}" class="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                        <h3 class="font-semibold text-slate-900 dark:text-slate-100">Project Structure</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Overview of the project layout</p>
                    </a>
                </div>
            </div>

            <!-- API Section -->
            <div class="space-y-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">API Reference</h2>
                <div class="space-y-2">
                    <a href="{{ route('mentor.docs.api') }}" class="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition">
                        <h3 class="font-semibold text-slate-900 dark:text-slate-100">REST API</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">API endpoints and usage examples</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</x-layouts.marketing>
