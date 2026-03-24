import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
const EditRetryOutcome = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRetryOutcome.url(args, options),
    method: 'get',
})

EditRetryOutcome.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcome.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditRetryOutcome.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcome.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRetryOutcome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcome.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRetryOutcome.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
const EditRetryOutcomeForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcome.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
EditRetryOutcomeForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRetryOutcome.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRetryOutcome.form = EditRetryOutcomeForm

export default EditRetryOutcome