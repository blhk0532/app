import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
const CreatePostNum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePostNum.url(options),
    method: 'get',
})

CreatePostNum.definition = {
    methods: ["get","head"],
    url: '/nds/queue/post-nums/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
CreatePostNum.url = (options?: RouteQueryOptions) => {
    return CreatePostNum.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
CreatePostNum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePostNum.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
CreatePostNum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePostNum.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
const CreatePostNumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePostNum.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
CreatePostNumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePostNum.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum::__invoke
* @see app/Filament/Queue/Resources/PostNums/Pages/CreatePostNum.php:7
* @route '/nds/queue/post-nums/create'
*/
CreatePostNumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreatePostNum.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreatePostNum.form = CreatePostNumForm

export default CreatePostNum