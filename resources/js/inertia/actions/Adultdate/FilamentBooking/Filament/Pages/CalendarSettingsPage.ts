import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
const CalendarSettingsPage670b3dc9494135f425873fd18435a23c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url(options),
    method: 'get',
})

CalendarSettingsPage670b3dc9494135f425873fd18435a23c.definition = {
    methods: ["get","head"],
    url: '/nds/booking/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url = (options?: RouteQueryOptions) => {
    return CalendarSettingsPage670b3dc9494135f425873fd18435a23c.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
CalendarSettingsPage670b3dc9494135f425873fd18435a23c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
CalendarSettingsPage670b3dc9494135f425873fd18435a23c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
const CalendarSettingsPage670b3dc9494135f425873fd18435a23cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
CalendarSettingsPage670b3dc9494135f425873fd18435a23cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/booking/calendar-settings-page'
*/
CalendarSettingsPage670b3dc9494135f425873fd18435a23cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage670b3dc9494135f425873fd18435a23c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CalendarSettingsPage670b3dc9494135f425873fd18435a23c.form = CalendarSettingsPage670b3dc9494135f425873fd18435a23cForm
/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
const CalendarSettingsPage41f117bd79543f0d84978afa5328987f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url(options),
    method: 'get',
})

CalendarSettingsPage41f117bd79543f0d84978afa5328987f.definition = {
    methods: ["get","head"],
    url: '/nds/super/calendar-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url = (options?: RouteQueryOptions) => {
    return CalendarSettingsPage41f117bd79543f0d84978afa5328987f.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage41f117bd79543f0d84978afa5328987f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage41f117bd79543f0d84978afa5328987f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
const CalendarSettingsPage41f117bd79543f0d84978afa5328987fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage41f117bd79543f0d84978afa5328987fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Pages\CalendarSettingsPage::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Pages/CalendarSettingsPage.php:7
* @route '/nds/super/calendar-settings-page'
*/
CalendarSettingsPage41f117bd79543f0d84978afa5328987fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CalendarSettingsPage41f117bd79543f0d84978afa5328987f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CalendarSettingsPage41f117bd79543f0d84978afa5328987f.form = CalendarSettingsPage41f117bd79543f0d84978afa5328987fForm

const CalendarSettingsPage = {
    '/nds/booking/calendar-settings-page': CalendarSettingsPage670b3dc9494135f425873fd18435a23c,
    '/nds/super/calendar-settings-page': CalendarSettingsPage41f117bd79543f0d84978afa5328987f,
}

export default CalendarSettingsPage