import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
const ListPostNums = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostNums.url(options),
    method: 'get',
})

ListPostNums.definition = {
    methods: ["get","head"],
    url: '/nds/queue/post-nums',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
ListPostNums.url = (options?: RouteQueryOptions) => {
    return ListPostNums.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
ListPostNums.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPostNums.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
ListPostNums.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPostNums.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
const ListPostNumsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPostNums.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
ListPostNumsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPostNums.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\ListPostNums::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/ListPostNums.php:7
* @route '/nds/queue/post-nums'
*/
ListPostNumsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPostNums.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPostNums.form = ListPostNumsForm

export default ListPostNums