<?php

declare(strict_types=1);

use App\Http\Controllers\QueueController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('spa')
    ->name('spa.')
    ->middleware(['auth', 'verified', HandleInertiaRequests::class])
    ->group(function (): void {
        Route::get('/', function () {
            return Inertia::render('app');
        })->name('home');

        Route::get('/app', function () {
            return Inertia::render('app');
        })->name('app');

        Route::get('/dashboard', function () {
            return Inertia::render('dashboard');
        })->name('user-dashboard');

        Route::get('/bokningar', function () {
            return Inertia::render('bokningar');
        })->name('bokningar');

        Route::get('/queue', QueueController::class)->name('queue');
    });
