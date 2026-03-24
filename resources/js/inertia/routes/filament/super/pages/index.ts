import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import chats8dcd54 from './chats'
import fullWidthChat from './full-width-chat'
/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/super',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Super\Pages\SuperDashboard::__invoke
* @see app/Filament/Super/Pages/SuperDashboard.php:7
* @route '/nds/super'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
export const dashboardBokning = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBokning.url(options),
    method: 'get',
})

dashboardBokning.definition = {
    methods: ["get","head"],
    url: '/nds/super/service/bokning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
dashboardBokning.url = (options?: RouteQueryOptions) => {
    return dashboardBokning.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
dashboardBokning.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBokning.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
dashboardBokning.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboardBokning.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
const dashboardBokningForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBokning.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
dashboardBokningForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBokning.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/super/service/bokning'
*/
dashboardBokningForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBokning.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboardBokning.form = dashboardBokningForm

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
export const dashboardBooking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBooking.url(options),
    method: 'get',
})

dashboardBooking.definition = {
    methods: ["get","head"],
    url: '/nds/super/service/booking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
dashboardBooking.url = (options?: RouteQueryOptions) => {
    return dashboardBooking.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
dashboardBooking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
dashboardBooking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboardBooking.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
const dashboardBookingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
dashboardBookingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBooking.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/super/service/booking'
*/
dashboardBookingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBooking.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboardBooking.form = dashboardBookingForm

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
export const sanctum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sanctum.url(options),
    method: 'get',
})

sanctum.definition = {
    methods: ["get","head"],
    url: '/nds/super/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
sanctum.url = (options?: RouteQueryOptions) => {
    return sanctum.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
sanctum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
sanctum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sanctum.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
const sanctumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
sanctumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/super/sanctum'
*/
sanctumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sanctum.form = sanctumForm

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
export const calendarSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarSettingsPage.url(options),
    method: 'get',
})

calendarSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/super/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
calendarSettingsPage.url = (options?: RouteQueryOptions) => {
    return calendarSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
calendarSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
calendarSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
const calendarSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
calendarSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
calendarSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendarSettingsPage.form = calendarSettingsPageForm

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
export const method404 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method404.url(options),
    method: 'get',
})

method404.definition = {
    methods: ["get","head"],
    url: '/nds/super/404',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
method404.url = (options?: RouteQueryOptions) => {
    return method404.definition.url + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
method404.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method404.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
method404.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: method404.url(options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
const method404Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method404.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
method404Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method404.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\PageNotFoundPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/PageNotFoundPage.php:7
* @route '/nds/super/404'
*/
method404Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method404.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

method404.form = method404Form

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
export const method403 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method403.url(options),
    method: 'get',
})

method403.definition = {
    methods: ["get","head"],
    url: '/nds/super/403',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
method403.url = (options?: RouteQueryOptions) => {
    return method403.definition.url + queryParams(options)
}

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
method403.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method403.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
method403.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: method403.url(options),
    method: 'head',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
const method403Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method403.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
method403Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method403.url(options),
    method: 'get',
})

/**
* @see \Cmsmaxinc\FilamentErrorPages\Filament\Pages\ForbiddenPage::__invoke
* @see plugins/cmsmaxinc/filament-error-pages/src/Filament/Pages/ForbiddenPage.php:7
* @route '/nds/super/403'
*/
method403Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: method403.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

method403.form = method403Form

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
export const myProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(options),
    method: 'get',
})

myProfile.definition = {
    methods: ["get","head"],
    url: '/nds/super/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
myProfile.url = (options?: RouteQueryOptions) => {
    return myProfile.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
myProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
myProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myProfile.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
const myProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
myProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/super/my-profile'
*/
myProfileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

myProfile.form = myProfileForm

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
export const backups = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backups.url(options),
    method: 'get',
})

backups.definition = {
    methods: ["get","head"],
    url: '/nds/super/backups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
backups.url = (options?: RouteQueryOptions) => {
    return backups.definition.url + queryParams(options)
}

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
backups.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backups.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
backups.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: backups.url(options),
    method: 'head',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
const backupsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backups.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
backupsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backups.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
backupsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: backups.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

backups.form = backupsForm

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
export const logs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

logs.definition = {
    methods: ["get","head"],
    url: '/nds/super/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
logs.url = (options?: RouteQueryOptions) => {
    return logs.definition.url + queryParams(options)
}

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
logs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
logs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logs.url(options),
    method: 'head',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
const logsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
logsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \AchyutN\FilamentLogViewer\LogTable::__invoke
* @see vendor/achyutn/filament-log-viewer/src/LogTable.php:7
* @route '/nds/super/logs'
*/
logsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logs.form = logsForm

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
export const generalSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

generalSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/super/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
generalSettingsPage.url = (options?: RouteQueryOptions) => {
    return generalSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
generalSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
generalSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generalSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
const generalSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
generalSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
generalSettingsPageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generalSettingsPage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generalSettingsPage.form = generalSettingsPageForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
export const notifierDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifierDashboard.url(options),
    method: 'get',
})

notifierDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/super/notifier-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
notifierDashboard.url = (options?: RouteQueryOptions) => {
    return notifierDashboard.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
notifierDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notifierDashboard.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
notifierDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notifierDashboard.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
const notifierDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifierDashboard.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
notifierDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifierDashboard.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
notifierDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notifierDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notifierDashboard.form = notifierDashboardForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
export const notificationSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notificationSettings.url(options),
    method: 'get',
})

notificationSettings.definition = {
    methods: ["get","head"],
    url: '/nds/super/notification-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
notificationSettings.url = (options?: RouteQueryOptions) => {
    return notificationSettings.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
notificationSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notificationSettings.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
notificationSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notificationSettings.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
const notificationSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notificationSettings.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
notificationSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notificationSettings.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotificationSettings::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotificationSettings.php:7
* @route '/nds/super/notification-settings'
*/
notificationSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notificationSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notificationSettings.form = notificationSettingsForm

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
export const eventChannelConfiguration = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventChannelConfiguration.url(options),
    method: 'get',
})

eventChannelConfiguration.definition = {
    methods: ["get","head"],
    url: '/nds/super/event-channel-configuration',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
eventChannelConfiguration.url = (options?: RouteQueryOptions) => {
    return eventChannelConfiguration.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
eventChannelConfiguration.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eventChannelConfiguration.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
eventChannelConfiguration.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eventChannelConfiguration.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
const eventChannelConfigurationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eventChannelConfiguration.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
eventChannelConfigurationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eventChannelConfiguration.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\EventChannelConfiguration::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/EventChannelConfiguration.php:7
* @route '/nds/super/event-channel-configuration'
*/
eventChannelConfigurationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eventChannelConfiguration.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

eventChannelConfiguration.form = eventChannelConfigurationForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
export const wirechat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(options),
    method: 'get',
})

wirechat.definition = {
    methods: ["get","head"],
    url: '/nds/super/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
wirechat.url = (options?: RouteQueryOptions) => {
    return wirechat.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
wirechat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wirechat.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
wirechat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wirechat.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
const wirechatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
wirechatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
wirechatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wirechat.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

wirechat.form = wirechatForm

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
export const chats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(options),
    method: 'get',
})

chats.definition = {
    methods: ["get","head"],
    url: '/nds/super/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
chats.url = (options?: RouteQueryOptions) => {
    return chats.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
chats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: chats.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
chats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: chats.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
const chatsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
chatsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatsPage::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatsPage.php:7
* @route '/nds/super/chats'
*/
chatsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: chats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

chats.form = chatsForm

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    dashboardBokning: Object.assign(dashboardBokning, dashboardBokning),
    dashboardBooking: Object.assign(dashboardBooking, dashboardBooking),
    sanctum: Object.assign(sanctum, sanctum),
    calendarSettingsPage: Object.assign(calendarSettingsPage, calendarSettingsPage),
    404: Object.assign(method404, method404),
    403: Object.assign(method403, method403),
    myProfile: Object.assign(myProfile, myProfile),
    backups: Object.assign(backups, backups),
    logs: Object.assign(logs, logs),
    generalSettingsPage: Object.assign(generalSettingsPage, generalSettingsPage),
    notifierDashboard: Object.assign(notifierDashboard, notifierDashboard),
    notificationSettings: Object.assign(notificationSettings, notificationSettings),
    eventChannelConfiguration: Object.assign(eventChannelConfiguration, eventChannelConfiguration),
    wirechat: Object.assign(wirechat, wirechat),
    chats: Object.assign(chats, chats8dcd54),
    fullWidthChat: Object.assign(fullWidthChat, fullWidthChat),
}

export default pages