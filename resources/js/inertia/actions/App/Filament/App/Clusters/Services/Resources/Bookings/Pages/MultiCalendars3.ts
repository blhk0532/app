import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
const MultiCalendars3 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MultiCalendars3.url(args, options),
    method: 'get',
})

MultiCalendars3.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/multi-calendars-3',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
MultiCalendars3.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return MultiCalendars3.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
MultiCalendars3.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: MultiCalendars3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
MultiCalendars3.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: MultiCalendars3.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
const MultiCalendars3Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MultiCalendars3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
MultiCalendars3Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MultiCalendars3.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\MultiCalendars3::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/MultiCalendars3.php:7
* @route '/nds/app/team/{tenant}/multi-calendars-3'
*/
MultiCalendars3Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: MultiCalendars3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

MultiCalendars3.form = MultiCalendars3Form

export default MultiCalendars3