import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
const GoogleCalendar = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GoogleCalendar.url(args, options),
    method: 'get',
})

GoogleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/google-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
GoogleCalendar.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return GoogleCalendar.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
GoogleCalendar.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GoogleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
GoogleCalendar.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GoogleCalendar.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
const GoogleCalendarForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GoogleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
GoogleCalendarForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GoogleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\GoogleCalendar::__invoke
* @see app/Filament/App/Pages/GoogleCalendar.php:7
* @route '/nds/app/team/{tenant}/google-calendar'
*/
GoogleCalendarForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GoogleCalendar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GoogleCalendar.form = GoogleCalendarForm

export default GoogleCalendar