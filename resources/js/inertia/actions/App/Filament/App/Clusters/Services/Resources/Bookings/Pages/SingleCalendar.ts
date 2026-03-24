import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
const SingleCalendar = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SingleCalendar.url(args, options),
    method: 'get',
})

SingleCalendar.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/single-calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
SingleCalendar.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return SingleCalendar.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
SingleCalendar.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SingleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
SingleCalendar.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SingleCalendar.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
const SingleCalendarForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SingleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
SingleCalendarForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SingleCalendar.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Clusters\Services\Resources\Bookings\Pages\SingleCalendar::__invoke
* @see app/Filament/App/Clusters/Services/Resources/Bookings/Pages/SingleCalendar.php:7
* @route '/nds/app/team/{tenant}/single-calendar'
*/
SingleCalendarForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SingleCalendar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SingleCalendar.form = SingleCalendarForm

export default SingleCalendar