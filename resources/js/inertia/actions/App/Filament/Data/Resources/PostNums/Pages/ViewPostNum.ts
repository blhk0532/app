import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
const ViewPostNum = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewPostNum.url(args, options),
    method: 'get',
})

ViewPostNum.definition = {
    methods: ["get","head"],
    url: '/nds/data/post-nums/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
ViewPostNum.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewPostNum.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
ViewPostNum.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewPostNum.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
ViewPostNum.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewPostNum.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
const ViewPostNumForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewPostNum.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
ViewPostNumForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewPostNum.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\PostNums\Pages\ViewPostNum::__invoke
* @see app/Filament/Data/Resources/PostNums/Pages/ViewPostNum.php:7
* @route '/nds/data/post-nums/{record}'
*/
ViewPostNumForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewPostNum.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewPostNum.form = ViewPostNumForm

export default ViewPostNum