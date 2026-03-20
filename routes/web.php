<?php

use Illuminate\Support\Facades\Route;

Route::view('/home', 'welcome')->name('home');
Route::redirect('/', '/app')->name('app');
Route::redirect('/login', '/app/login')->name('app.login');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::view('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
