import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
const CreateSearch41b2a0982134eabf380c25c508749aff = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

CreateSearch41b2a0982134eabf380c25c508749aff.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749aff.url = (options?: RouteQueryOptions) => {
    return CreateSearch41b2a0982134eabf380c25c508749aff.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749aff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749aff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
const CreateSearch41b2a0982134eabf380c25c508749affForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749affForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch41b2a0982134eabf380c25c508749aff.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/booking/searches/create'
*/
CreateSearch41b2a0982134eabf380c25c508749affForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch41b2a0982134eabf380c25c508749aff.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch41b2a0982134eabf380c25c508749aff.form = CreateSearch41b2a0982134eabf380c25c508749affForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
const CreateSearch7ddd2f8e13819d504d711cec74acfd76 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

CreateSearch7ddd2f8e13819d504d711cec74acfd76.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76.url = (options?: RouteQueryOptions) => {
    return CreateSearch7ddd2f8e13819d504d711cec74acfd76.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
const CreateSearch7ddd2f8e13819d504d711cec74acfd76Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/chat/searches/create'
*/
CreateSearch7ddd2f8e13819d504d711cec74acfd76Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch7ddd2f8e13819d504d711cec74acfd76.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch7ddd2f8e13819d504d711cec74acfd76.form = CreateSearch7ddd2f8e13819d504d711cec74acfd76Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
const CreateSearch21e1c11e2ddad57b44ac5608c17c9490 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

CreateSearch21e1c11e2ddad57b44ac5608c17c9490.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url = (options?: RouteQueryOptions) => {
    return CreateSearch21e1c11e2ddad57b44ac5608c17c9490.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
const CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/dev/searches/create'
*/
CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch21e1c11e2ddad57b44ac5608c17c9490.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch21e1c11e2ddad57b44ac5608c17c9490.form = CreateSearch21e1c11e2ddad57b44ac5608c17c9490Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
const CreateSearch65e7e64f76760db1788eb0c34d22674f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

CreateSearch65e7e64f76760db1788eb0c34d22674f.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674f.url = (options?: RouteQueryOptions) => {
    return CreateSearch65e7e64f76760db1788eb0c34d22674f.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
const CreateSearch65e7e64f76760db1788eb0c34d22674fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch65e7e64f76760db1788eb0c34d22674f.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/email/searches/create'
*/
CreateSearch65e7e64f76760db1788eb0c34d22674fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch65e7e64f76760db1788eb0c34d22674f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch65e7e64f76760db1788eb0c34d22674f.form = CreateSearch65e7e64f76760db1788eb0c34d22674fForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
const CreateSearch51c492d7e097d673821ede1dcd6af67a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

CreateSearch51c492d7e097d673821ede1dcd6af67a.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67a.url = (options?: RouteQueryOptions) => {
    return CreateSearch51c492d7e097d673821ede1dcd6af67a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
const CreateSearch51c492d7e097d673821ede1dcd6af67aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch51c492d7e097d673821ede1dcd6af67a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/files/searches/create'
*/
CreateSearch51c492d7e097d673821ede1dcd6af67aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch51c492d7e097d673821ede1dcd6af67a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch51c492d7e097d673821ede1dcd6af67a.form = CreateSearch51c492d7e097d673821ede1dcd6af67aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
const CreateSearchb26968091044647a915a8dd7c5b91c30 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

CreateSearchb26968091044647a915a8dd7c5b91c30.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30.url = (options?: RouteQueryOptions) => {
    return CreateSearchb26968091044647a915a8dd7c5b91c30.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
const CreateSearchb26968091044647a915a8dd7c5b91c30Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb26968091044647a915a8dd7c5b91c30.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/notify/searches/create'
*/
CreateSearchb26968091044647a915a8dd7c5b91c30Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearchb26968091044647a915a8dd7c5b91c30.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearchb26968091044647a915a8dd7c5b91c30.form = CreateSearchb26968091044647a915a8dd7c5b91c30Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
const CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url = (options?: RouteQueryOptions) => {
    return CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
const CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/queue/searches/create'
*/
CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b.form = CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
const CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url = (options?: RouteQueryOptions) => {
    return CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
const CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\CreateSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/CreateSearch.php:7
* @route '/nds/tools/searches/create'
*/
CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42.form = CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42Form

const CreateSearch = {
    '/nds/booking/searches/create': CreateSearch41b2a0982134eabf380c25c508749aff,
    '/nds/chat/searches/create': CreateSearch7ddd2f8e13819d504d711cec74acfd76,
    '/nds/dev/searches/create': CreateSearch21e1c11e2ddad57b44ac5608c17c9490,
    '/nds/email/searches/create': CreateSearch65e7e64f76760db1788eb0c34d22674f,
    '/nds/files/searches/create': CreateSearch51c492d7e097d673821ede1dcd6af67a,
    '/nds/notify/searches/create': CreateSearchb26968091044647a915a8dd7c5b91c30,
    '/nds/queue/searches/create': CreateSearch0ce5d5a87b68d45355bfcba5a3be8f2b,
    '/nds/tools/searches/create': CreateSearch4e61e5527d3af0cd0b98b827a3bd3f42,
}

export default CreateSearch