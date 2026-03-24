import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
const ListSearches0b27a2039d6f08c78d83e0b03fb6d512 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

ListSearches0b27a2039d6f08c78d83e0b03fb6d512.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url = (options?: RouteQueryOptions) => {
    return ListSearches0b27a2039d6f08c78d83e0b03fb6d512.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
const ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/booking/searches'
*/
ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0b27a2039d6f08c78d83e0b03fb6d512.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches0b27a2039d6f08c78d83e0b03fb6d512.form = ListSearches0b27a2039d6f08c78d83e0b03fb6d512Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
const ListSearches0d679ef96ce513ca3873950998731deb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

ListSearches0d679ef96ce513ca3873950998731deb.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731deb.url = (options?: RouteQueryOptions) => {
    return ListSearches0d679ef96ce513ca3873950998731deb.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731deb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731deb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
const ListSearches0d679ef96ce513ca3873950998731debForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731debForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0d679ef96ce513ca3873950998731deb.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/chat/searches'
*/
ListSearches0d679ef96ce513ca3873950998731debForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches0d679ef96ce513ca3873950998731deb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches0d679ef96ce513ca3873950998731deb.form = ListSearches0d679ef96ce513ca3873950998731debForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
const ListSearches090dc064749d084a15b927d3b7ab324a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

ListSearches090dc064749d084a15b927d3b7ab324a.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324a.url = (options?: RouteQueryOptions) => {
    return ListSearches090dc064749d084a15b927d3b7ab324a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
const ListSearches090dc064749d084a15b927d3b7ab324aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches090dc064749d084a15b927d3b7ab324a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/dev/searches'
*/
ListSearches090dc064749d084a15b927d3b7ab324aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches090dc064749d084a15b927d3b7ab324a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches090dc064749d084a15b927d3b7ab324a.form = ListSearches090dc064749d084a15b927d3b7ab324aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
const ListSearches6efc96f1788b29f160513ae9e9ad2820 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

ListSearches6efc96f1788b29f160513ae9e9ad2820.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820.url = (options?: RouteQueryOptions) => {
    return ListSearches6efc96f1788b29f160513ae9e9ad2820.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
const ListSearches6efc96f1788b29f160513ae9e9ad2820Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches6efc96f1788b29f160513ae9e9ad2820.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/email/searches'
*/
ListSearches6efc96f1788b29f160513ae9e9ad2820Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches6efc96f1788b29f160513ae9e9ad2820.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches6efc96f1788b29f160513ae9e9ad2820.form = ListSearches6efc96f1788b29f160513ae9e9ad2820Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
const ListSearches9f23a05972b2ea1a4a8ca6fae373091a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

ListSearches9f23a05972b2ea1a4a8ca6fae373091a.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url = (options?: RouteQueryOptions) => {
    return ListSearches9f23a05972b2ea1a4a8ca6fae373091a.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
const ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/files/searches'
*/
ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches9f23a05972b2ea1a4a8ca6fae373091a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches9f23a05972b2ea1a4a8ca6fae373091a.form = ListSearches9f23a05972b2ea1a4a8ca6fae373091aForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
const ListSearchesc17433135a23af775220e3657f664cdf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

ListSearchesc17433135a23af775220e3657f664cdf.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdf.url = (options?: RouteQueryOptions) => {
    return ListSearchesc17433135a23af775220e3657f664cdf.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
const ListSearchesc17433135a23af775220e3657f664cdfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc17433135a23af775220e3657f664cdf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/notify/searches'
*/
ListSearchesc17433135a23af775220e3657f664cdfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearchesc17433135a23af775220e3657f664cdf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearchesc17433135a23af775220e3657f664cdf.form = ListSearchesc17433135a23af775220e3657f664cdfForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
const ListSearches548c615b669dfb46e86cb1a21cb1d2bf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

ListSearches548c615b669dfb46e86cb1a21cb1d2bf.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url = (options?: RouteQueryOptions) => {
    return ListSearches548c615b669dfb46e86cb1a21cb1d2bf.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
const ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/queue/searches'
*/
ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches548c615b669dfb46e86cb1a21cb1d2bf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches548c615b669dfb46e86cb1a21cb1d2bf.form = ListSearches548c615b669dfb46e86cb1a21cb1d2bfForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
const ListSearches875b656d052065d45c2fd5ddbd2c8b1d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

ListSearches875b656d052065d45c2fd5ddbd2c8b1d.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url = (options?: RouteQueryOptions) => {
    return ListSearches875b656d052065d45c2fd5ddbd2c8b1d.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
const ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ListSearches::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ListSearches.php:7
* @route '/nds/tools/searches'
*/
ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSearches875b656d052065d45c2fd5ddbd2c8b1d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSearches875b656d052065d45c2fd5ddbd2c8b1d.form = ListSearches875b656d052065d45c2fd5ddbd2c8b1dForm

const ListSearches = {
    '/nds/booking/searches': ListSearches0b27a2039d6f08c78d83e0b03fb6d512,
    '/nds/chat/searches': ListSearches0d679ef96ce513ca3873950998731deb,
    '/nds/dev/searches': ListSearches090dc064749d084a15b927d3b7ab324a,
    '/nds/email/searches': ListSearches6efc96f1788b29f160513ae9e9ad2820,
    '/nds/files/searches': ListSearches9f23a05972b2ea1a4a8ca6fae373091a,
    '/nds/notify/searches': ListSearchesc17433135a23af775220e3657f664cdf,
    '/nds/queue/searches': ListSearches548c615b669dfb46e86cb1a21cb1d2bf,
    '/nds/tools/searches': ListSearches875b656d052065d45c2fd5ddbd2c8b1d,
}

export default ListSearches