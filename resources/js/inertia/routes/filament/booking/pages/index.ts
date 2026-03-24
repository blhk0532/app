import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/nds/booking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\BookingDashboard::__invoke
* @see app/Filament/Booking/Pages/BookingDashboard.php:7
* @route '/nds/booking'
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
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
*/
export const myProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(options),
    method: 'get',
})

myProfile.definition = {
    methods: ["get","head"],
    url: '/nds/booking/my-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
*/
myProfile.url = (options?: RouteQueryOptions) => {
    return myProfile.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
*/
myProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
*/
myProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myProfile.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
*/
const myProfileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
*/
myProfileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myProfile.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage::__invoke
* @see plugins/joaopaulolndev/filament-edit-profile/src/Pages/EditProfilePage.php:7
* @route '/nds/booking/my-profile'
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
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
export const googleCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleCalendar.url(options),
    method: 'get',
})

googleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/booking/google-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
googleCalendar.url = (options?: RouteQueryOptions) => {
    return googleCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
googleCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: googleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
googleCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: googleCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
const googleCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
googleCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\GoogleCalendar::__invoke
* @see app/Filament/Booking/Pages/GoogleCalendar.php:7
* @route '/nds/booking/google-calendar'
*/
googleCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: googleCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

googleCalendar.form = googleCalendarForm

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
export const inertiaCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inertiaCalendar.url(options),
    method: 'get',
})

inertiaCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/booking/inertia-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
inertiaCalendar.url = (options?: RouteQueryOptions) => {
    return inertiaCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
inertiaCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inertiaCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
inertiaCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inertiaCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
const inertiaCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inertiaCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
inertiaCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inertiaCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Pages\InertiaCalendar::__invoke
* @see app/Filament/Booking/Pages/InertiaCalendar.php:7
* @route '/nds/booking/inertia-calendar'
*/
inertiaCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inertiaCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

inertiaCalendar.form = inertiaCalendarForm

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
*/
export const dashboardBokning = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBokning.url(options),
    method: 'get',
})

dashboardBokning.definition = {
    methods: ["get","head"],
    url: '/nds/booking/service/bokning',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
*/
dashboardBokning.url = (options?: RouteQueryOptions) => {
    return dashboardBokning.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
*/
dashboardBokning.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBokning.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
*/
dashboardBokning.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboardBokning.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
*/
const dashboardBokningForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBokning.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
*/
dashboardBokningForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBokning.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBokning::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBokning.php:7
* @route '/nds/booking/service/bokning'
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
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
export const dashboardBooking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBooking.url(options),
    method: 'get',
})

dashboardBooking.definition = {
    methods: ["get","head"],
    url: '/nds/booking/service/booking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
dashboardBooking.url = (options?: RouteQueryOptions) => {
    return dashboardBooking.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
dashboardBooking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardBooking.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
dashboardBooking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboardBooking.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
const dashboardBookingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBooking.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
*/
dashboardBookingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboardBooking.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\DashboardBooking::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/DashboardBooking.php:7
* @route '/nds/booking/service/booking'
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
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
export const singleCalendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singleCalendar.url(options),
    method: 'get',
})

singleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/booking/single-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
singleCalendar.url = (options?: RouteQueryOptions) => {
    return singleCalendar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
singleCalendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: singleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
singleCalendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: singleCalendar.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
const singleCalendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
singleCalendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singleCalendar.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/booking/single-calendar'
*/
singleCalendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: singleCalendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

singleCalendar.form = singleCalendarForm

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
export const calendarSettingsPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarSettingsPage.url(options),
    method: 'get',
})

calendarSettingsPage.definition = {
    methods: ["get","head"],
    url: '/nds/booking/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
calendarSettingsPage.url = (options?: RouteQueryOptions) => {
    return calendarSettingsPage.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
calendarSettingsPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
calendarSettingsPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendarSettingsPage.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
const calendarSettingsPageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
calendarSettingsPageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendarSettingsPage.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
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
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
export const sanctum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sanctum.url(options),
    method: 'get',
})

sanctum.definition = {
    methods: ["get","head"],
    url: '/nds/booking/sanctum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
sanctum.url = (options?: RouteQueryOptions) => {
    return sanctum.definition.url + queryParams(options)
}

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
sanctum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
sanctum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sanctum.url(options),
    method: 'head',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
const sanctumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
*/
sanctumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sanctum.url(options),
    method: 'get',
})

/**
* @see \Devtical\Sanctum\Pages\Sanctum::__invoke
* @see plugins/devtical/filament-sanctum/src/Pages/Sanctum.php:7
* @route '/nds/booking/sanctum'
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

const pages = {
    dashboard: Object.assign(dashboard, dashboard),
    myProfile: Object.assign(myProfile, myProfile),
    googleCalendar: Object.assign(googleCalendar, googleCalendar),
    inertiaCalendar: Object.assign(inertiaCalendar, inertiaCalendar),
    dashboardBokning: Object.assign(dashboardBokning, dashboardBokning),
    dashboardBooking: Object.assign(dashboardBooking, dashboardBooking),
    singleCalendar: Object.assign(singleCalendar, singleCalendar),
    calendarSettingsPage: Object.assign(calendarSettingsPage, calendarSettingsPage),
    sanctum: Object.assign(sanctum, sanctum),
}

export default pages