<?php

use function Laravel\Folio\{name};

name('mentor.wix');

?>

<x-layouts.marketing>
    <div class="w-full">
        <x-ui.marketing.breadcrumbs :crumbs="[['text' => 'Wix']]" />
        <div class="flex items-center justify-center w-full pt-24">
            <div class="w-full max-w-3xl px-8 text-center">
                <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">Wix Power-Ups</h1>
                <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    This page is temporarily served as a static Folio page to keep the mentor section stable.
                </p>
                <div class="mt-8">
                    <a href="{{ route('mentor.power-ups') }}" class="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-md dark:bg-slate-100 dark:text-slate-900">
                        Open Power-Ups
                    </a>
                </div>
            </div>
        </div>
    </div>
</x-layouts.marketing>