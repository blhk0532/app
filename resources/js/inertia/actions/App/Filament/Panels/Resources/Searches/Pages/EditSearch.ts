import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
const EditSearchf604a699f73eb8d346b14abf61d46b2d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

EditSearchf604a699f73eb8d346b14abf61d46b2d.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchf604a699f73eb8d346b14abf61d46b2d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
const EditSearchf604a699f73eb8d346b14abf61d46b2dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/booking/searches/{record}/edit'
*/
EditSearchf604a699f73eb8d346b14abf61d46b2dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf604a699f73eb8d346b14abf61d46b2d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchf604a699f73eb8d346b14abf61d46b2d.form = EditSearchf604a699f73eb8d346b14abf61d46b2dForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
const EditSearchc8f69e27d44a8ca9e12ca137e37fd714 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

EditSearchc8f69e27d44a8ca9e12ca137e37fd714.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchc8f69e27d44a8ca9e12ca137e37fd714.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
const EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/chat/searches/{record}/edit'
*/
EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchc8f69e27d44a8ca9e12ca137e37fd714.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchc8f69e27d44a8ca9e12ca137e37fd714.form = EditSearchc8f69e27d44a8ca9e12ca137e37fd714Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
const EditSearch71ccbb5d60114277c98cc1ee95d45e49 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

EditSearch71ccbb5d60114277c98cc1ee95d45e49.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch71ccbb5d60114277c98cc1ee95d45e49.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
const EditSearch71ccbb5d60114277c98cc1ee95d45e49Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/dev/searches/{record}/edit'
*/
EditSearch71ccbb5d60114277c98cc1ee95d45e49Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch71ccbb5d60114277c98cc1ee95d45e49.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch71ccbb5d60114277c98cc1ee95d45e49.form = EditSearch71ccbb5d60114277c98cc1ee95d45e49Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
const EditSearcha191a51652a5fa9d93c25d5083cab30f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

EditSearcha191a51652a5fa9d93c25d5083cab30f.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearcha191a51652a5fa9d93c25d5083cab30f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
const EditSearcha191a51652a5fa9d93c25d5083cab30fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/email/searches/{record}/edit'
*/
EditSearcha191a51652a5fa9d93c25d5083cab30fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearcha191a51652a5fa9d93c25d5083cab30f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearcha191a51652a5fa9d93c25d5083cab30f.form = EditSearcha191a51652a5fa9d93c25d5083cab30fForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
const EditSearch5bd8e8e5516b45b2108bb63330e8249b = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

EditSearch5bd8e8e5516b45b2108bb63330e8249b.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249b.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch5bd8e8e5516b45b2108bb63330e8249b.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249b.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249b.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
const EditSearch5bd8e8e5516b45b2108bb63330e8249bForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249bForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/files/searches/{record}/edit'
*/
EditSearch5bd8e8e5516b45b2108bb63330e8249bForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch5bd8e8e5516b45b2108bb63330e8249b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch5bd8e8e5516b45b2108bb63330e8249b.form = EditSearch5bd8e8e5516b45b2108bb63330e8249bForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
const EditSearch6fcfe6ae94d2f0d214ff5e9488049e53 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
const EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/notify/searches/{record}/edit'
*/
EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch6fcfe6ae94d2f0d214ff5e9488049e53.form = EditSearch6fcfe6ae94d2f0d214ff5e9488049e53Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
const EditSearch99b6400dfec4104608439f83cac86521 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

EditSearch99b6400dfec4104608439f83cac86521.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearch99b6400dfec4104608439f83cac86521.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
const EditSearch99b6400dfec4104608439f83cac86521Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch99b6400dfec4104608439f83cac86521.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/queue/searches/{record}/edit'
*/
EditSearch99b6400dfec4104608439f83cac86521Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearch99b6400dfec4104608439f83cac86521.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearch99b6400dfec4104608439f83cac86521.form = EditSearch99b6400dfec4104608439f83cac86521Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
const EditSearchf06000cfcb91b5089856c20a354e2483 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

EditSearchf06000cfcb91b5089856c20a354e2483.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSearchf06000cfcb91b5089856c20a354e2483.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
const EditSearchf06000cfcb91b5089856c20a354e2483Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\EditSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/EditSearch.php:7
* @route '/nds/tools/searches/{record}/edit'
*/
EditSearchf06000cfcb91b5089856c20a354e2483Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSearchf06000cfcb91b5089856c20a354e2483.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSearchf06000cfcb91b5089856c20a354e2483.form = EditSearchf06000cfcb91b5089856c20a354e2483Form

const EditSearch = {
    '/nds/booking/searches/{record}/edit': EditSearchf604a699f73eb8d346b14abf61d46b2d,
    '/nds/chat/searches/{record}/edit': EditSearchc8f69e27d44a8ca9e12ca137e37fd714,
    '/nds/dev/searches/{record}/edit': EditSearch71ccbb5d60114277c98cc1ee95d45e49,
    '/nds/email/searches/{record}/edit': EditSearcha191a51652a5fa9d93c25d5083cab30f,
    '/nds/files/searches/{record}/edit': EditSearch5bd8e8e5516b45b2108bb63330e8249b,
    '/nds/notify/searches/{record}/edit': EditSearch6fcfe6ae94d2f0d214ff5e9488049e53,
    '/nds/queue/searches/{record}/edit': EditSearch99b6400dfec4104608439f83cac86521,
    '/nds/tools/searches/{record}/edit': EditSearchf06000cfcb91b5089856c20a354e2483,
}

export default EditSearch