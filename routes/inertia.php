<?php

declare(strict_types=1);

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('spa')
    ->name('spa.')
    ->middleware(['auth', 'verified', HandleInertiaRequests::class])
    ->group(function (): void {
        Route::get('/', function () {
            return Inertia::render('Home');
        })->name('home');

        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });
