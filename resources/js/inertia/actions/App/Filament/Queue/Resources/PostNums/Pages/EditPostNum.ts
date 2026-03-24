import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
const EditPostNum = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPostNum.url(args, options),
    method: 'get',
})

EditPostNum.definition = {
    methods: ["get","head"],
    url: '/nds/queue/post-nums/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
EditPostNum.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPostNum.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
EditPostNum.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPostNum.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
EditPostNum.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPostNum.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
const EditPostNumForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPostNum.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
EditPostNumForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPostNum.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\EditPostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/EditPostNum.php:7
* @route '/nds/queue/post-nums/{record}/edit'
*/
EditPostNumForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPostNum.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPostNum.form = EditPostNumForm

export default EditPostNum