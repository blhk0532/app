<?php

require __DIR__.'/settings.php';
require __DIR__.'/inertia.php';

use App\Http\Controllers\Api\CalendarBookingController;
use App\Http\Controllers\Api\CalendarDataController;
use App\Http\Controllers\CalendarEventController;
use App\Http\Controllers\CalendarResourceController;
use App\Http\Controllers\RingaDataOutcomeController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserEmailResetNotification;
use App\Http\Controllers\UserEmailVerificationNotificationController;
use App\Http\Controllers\UserPasswordController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\UserTwoFactorAuthenticationController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;
use Livewire\Livewire;

Route::view('/home', 'welcome')->name('home');
// Route::redirect('/', '/app')->name('app');
Route::redirect('/login', '/app/login')->name('app.login');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::view('dashboard', 'dashboard')->name('home.dashboard');
});

// Livewire routes - MUST be registered for Livewire to work
Livewire::setScriptRoute(function ($handle, $path) {
    return Route::get($path, $handle)->name('livewire.script');
});

Livewire::setUpdateRoute(function ($handle, $path) {
    return Route::post($path, $handle)->name('livewire.update');
});

Route::get('/', fn () => redirect('/app'))->name('app');

Route::get('/nds', fn () => redirect('/app'));

Route::get('/nds/{any}', fn () => redirect('/app'))
    ->where('any', '.*')
    ->name('app');

Route::get('/spa', function () {
    return redirect('/spa/app');
})->name('spa');

Route::prefix('api/calendar')->group(function (): void {
    Route::get('bookings/public', [CalendarBookingController::class, 'publicIndex']);
});

Route::middleware([HandleInertiaRequests::class, 'auth', 'verified'])->group(function (): void {
    Route::get('spa/calendar', fn () => Inertia::render('calendar'))->name('calendar');
    Route::get('spa/calendars', fn () => Inertia::render('calendars'))->name('calendars');
    Route::get('spa/calendar-one', fn () => Inertia::render('calendar-one'))->name('calendar-one');
    Route::get('spa/calendar-two', fn () => Inertia::render('calendar-two'))->name('calendar-two');
    Route::get('spa/calendar-multi', fn () => Inertia::render('calendar-multi'))->name('calendar-multi');
    Route::get('spa/calendar-example', fn () => Inertia::render('calendar-example'))->name('calendar-example');
    Route::get('spa/big-calendar', fn () => Inertia::render('big-calendar'))->name('big-calendar');
    Route::get('spa/full-calendar', fn () => Inertia::render('full-calendar'))->name('full-calendar');
    Route::get('spa/shadcn-event-calendar', fn () => Inertia::render('shadcn-event-calendar'))->name('shadcn-event-calendar');
    Route::get('spa/booking-calendar', fn () => Inertia::render('booking-calendar'))->name('booking-calendar');
    Route::get('spa/calendar/events', CalendarEventController::class)->name('calendar.events');
    Route::get('spa/calendar/resources', CalendarResourceController::class)->name('calendar.resources');

    // API routes for calendar booking operations
    Route::prefix('api/calendar')->group(function (): void {
        Route::get('bookings', [CalendarBookingController::class, 'index']);
        Route::post('bookings', [CalendarBookingController::class, 'store']);
        Route::put('bookings/{booking}', [CalendarBookingController::class, 'update']);
        Route::delete('bookings/{booking}', [CalendarBookingController::class, 'destroy']);
        Route::patch('bookings/{booking}/move', [CalendarBookingController::class, 'move']);
        Route::patch('bookings/{booking}/resize', [CalendarBookingController::class, 'resize']);

        // API routes for calendar data
        Route::get('clients', [CalendarDataController::class, 'clients']);
        Route::post('clients', [CalendarDataController::class, 'store']);
        Route::get('services', [CalendarDataController::class, 'services']);
        Route::get('locations', [CalendarDataController::class, 'locations']);
        Route::get('service-users', [CalendarDataController::class, 'serviceUsers']);
        Route::get('calendars', [CalendarDataController::class, 'calendars']);
        Route::get('categories', [CalendarDataController::class, 'categories']);
        Route::get('stats', [CalendarDataController::class, 'bookingStats']);
    });
});

Route::middleware([HandleInertiaRequests::class, 'auth'])->group(function (): void {
    // User...
    Route::delete('user', [UserController::class, 'destroy'])->name('user.destroy');

    // User Profile...
    Route::redirect('spa/settings', '/spa/settings/profile');
    Route::get('spa/settings/profile', [UserProfileController::class, 'edit'])->name('user-profile.edit');
    Route::patch('spa/settings/profile', [UserProfileController::class, 'update'])->name('user-profile.update');

    // User Password...
    Route::get('spa/settings/password', [UserPasswordController::class, 'edit'])->name('settings.password.edit');
    Route::put('spa/settings/password', [UserPasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('settings.password.update');

    // Appearance...
    Route::get('spa/settings/appearance', fn () => Inertia::render('appearance/update'))->name('spa.appearance.edit');

    // User Two-Factor Authentication...
    Route::get('spa/settings/two-factor', [UserTwoFactorAuthenticationController::class, 'show'])->name('two-factor.show');
});

Route::middleware('guest')->group(function (): void {
    // User...
    Route::get('spa/register', [UserController::class, 'create'])->name('spa.register');
    Route::post('spa/register', [UserController::class, 'store'])->name('spa.register.store');

    // User Password...
    Route::get('spa/reset-password/{token}', [UserPasswordController::class, 'create'])->name('spa.password.reset');
    Route::post('spa/reset-password', [UserPasswordController::class, 'store'])->name('password.store');

    // User Email Reset Notification...
    Route::get('spa/forgot-password', [UserEmailResetNotification::class, 'create'])->name('spa.password.request');
    Route::post('spa/forgot-password', [UserEmailResetNotification::class, 'store'])->name('spa.password.email');

    // Session...
    Route::get('spa/login', [SessionController::class, 'create'])->name('spa.login');
    Route::post('spa/login', [SessionController::class, 'store'])->name('spa.login.store');
});

Route::middleware('auth')->group(function (): void {
    // User Email Verification...
    //   Route::get('spa/verify-email', [UserEmailVerificationNotificationController::class, 'create'])->name('verification.notice');
    Route::post('spa/email/verification-notification', [UserEmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('spa.verification.send');

    // User Email Verification... (handled by Fortify's Features::emailVerification())
    // Route::get('spa/verify-email/{id}/{hash}', [UserEmailVerificationNotificationController::class, 'update'])
    //     ->middleware(['signed', 'throttle:6,1'])
    //     ->name('verification.verify');

    // Session...
    Route::post('spa/logout', [SessionController::class, 'destroy'])->name('spa.logout');

    // Back-compat: provide named routes for the chat dashboard so Filament
    // navigation does not throw when a page is referenced but not registered.
    Route::get('filament/app/chat-dashboard', function () {
        // This is a safe fallback; when the actual chat dashboard page is available
        // Filament will provide the correct route and override this. For now we
        // redirect to the app dashboard to avoid exceptions in the sidebar.
        return redirect()->route('home.dashboard');
    })->name('filament.app.pages.chat-dashboard');

    Route::get('filament/admin/chat-dashboard', function () {
        // Fallback for the admin panel chat dashboard nav item. Redirect to
        // the admin dashboard to keep navigation stable.
        return redirect()->route('home.dashboard');
    })->name('filament.admin.pages.chat-dashboard');

    Route::get('spa/{tenant}/min-profile', function (string $tenant) {
        // Fallback for the admin panel chat dashboard nav item. Redirect to
        // the admin dashboard to keep navigation stable.
        return redirect()->to(EditProfilePage::getUrl(parameters: ['tenant' => $tenant]));
    });

    // Record ringa-data outcomes (non-Livewire fallback)
    Route::post('spa/{tenant}/ringa-data/{id}/outcome', [RingaDataOutcomeController::class, 'store'])
        ->name('ringa-data.outcome.store');
});

Route::get('spa/admin/tenant/{tenant}/profile', function ($tenant) {
    return redirect()->to(EditProfilePage::getUrl(parameters: ['tenant' => $tenant]));
})->name('filament.admin.tenant.profile');

Route::get('spa/app/app/team/{tenant}/profile', function ($tenant) {
    return redirect()->to(EditProfilePage::getUrl(parameters: ['tenant' => $tenant]));
})->name('spa.filament.app.tenant.profile');
