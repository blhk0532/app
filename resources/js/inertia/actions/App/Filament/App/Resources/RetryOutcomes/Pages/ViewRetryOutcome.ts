import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
const ViewRetryOutcome = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRetryOutcome.url(args, options),
    method: 'get',
})

ViewRetryOutcome.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewRetryOutcome.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRetryOutcome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcome.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRetryOutcome.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
const ViewRetryOutcomeForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcomeForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
ViewRetryOutcomeForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRetryOutcome.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRetryOutcome.form = ViewRetryOutcomeForm

export default ViewRetryOutcome