import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
index.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ListRetryOutcomes.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes'
*/
indexForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
export const view = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
view.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
view.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
view.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
const viewForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
viewForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/ViewRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}'
*/
viewForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/retry-outcomes/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
edit.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome::__invoke
* @see app/Filament/App/Resources/RetryOutcomes/Pages/EditRetryOutcome.php:7
* @route '/nds/app/team/{tenant}/retry-outcomes/{record}/edit'
*/
editForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const retryOutcomes = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default retryOutcomes