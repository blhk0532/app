import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
const ViewSearch1457e2c48bc4996e06d2f95be512b6bd = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

ViewSearch1457e2c48bc4996e06d2f95be512b6bd.definition = {
    methods: ["get","head"],
    url: '/nds/booking/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearch1457e2c48bc4996e06d2f95be512b6bd.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bd.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bd.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
const ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/booking/searches/{record}'
*/
ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch1457e2c48bc4996e06d2f95be512b6bd.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch1457e2c48bc4996e06d2f95be512b6bd.form = ViewSearch1457e2c48bc4996e06d2f95be512b6bdForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
const ViewSearchfefe59097a80b5de71cc5c89986c3f77 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

ViewSearchfefe59097a80b5de71cc5c89986c3f77.definition = {
    methods: ["get","head"],
    url: '/nds/chat/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearchfefe59097a80b5de71cc5c89986c3f77.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
const ViewSearchfefe59097a80b5de71cc5c89986c3f77Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/chat/searches/{record}'
*/
ViewSearchfefe59097a80b5de71cc5c89986c3f77Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchfefe59097a80b5de71cc5c89986c3f77.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearchfefe59097a80b5de71cc5c89986c3f77.form = ViewSearchfefe59097a80b5de71cc5c89986c3f77Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
const ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.definition = {
    methods: ["get","head"],
    url: '/nds/dev/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
const ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/dev/searches/{record}'
*/
ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0.form = ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
const ViewSearch617d0b3b23ebe9d5c76012697abb10b6 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

ViewSearch617d0b3b23ebe9d5c76012697abb10b6.definition = {
    methods: ["get","head"],
    url: '/nds/email/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearch617d0b3b23ebe9d5c76012697abb10b6.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
const ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/email/searches/{record}'
*/
ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch617d0b3b23ebe9d5c76012697abb10b6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch617d0b3b23ebe9d5c76012697abb10b6.form = ViewSearch617d0b3b23ebe9d5c76012697abb10b6Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
const ViewSearch636a65f3579a2295a83bbf8be3ae90f5 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

ViewSearch636a65f3579a2295a83bbf8be3ae90f5.definition = {
    methods: ["get","head"],
    url: '/nds/files/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearch636a65f3579a2295a83bbf8be3ae90f5.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
const ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/files/searches/{record}'
*/
ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch636a65f3579a2295a83bbf8be3ae90f5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch636a65f3579a2295a83bbf8be3ae90f5.form = ViewSearch636a65f3579a2295a83bbf8be3ae90f5Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
const ViewSearch4af21ec6c42f540005910381a28c1d73 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

ViewSearch4af21ec6c42f540005910381a28c1d73.definition = {
    methods: ["get","head"],
    url: '/nds/notify/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearch4af21ec6c42f540005910381a28c1d73.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
const ViewSearch4af21ec6c42f540005910381a28c1d73Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/notify/searches/{record}'
*/
ViewSearch4af21ec6c42f540005910381a28c1d73Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch4af21ec6c42f540005910381a28c1d73.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch4af21ec6c42f540005910381a28c1d73.form = ViewSearch4af21ec6c42f540005910381a28c1d73Form
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
const ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.definition = {
    methods: ["get","head"],
    url: '/nds/queue/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
const ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/queue/searches/{record}'
*/
ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d.form = ViewSearchdb170743e5ffdfc3889275b0b8fe7a9dForm
/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
const ViewSearch42c925e50350757508354d24b49ec126 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

ViewSearch42c925e50350757508354d24b49ec126.definition = {
    methods: ["get","head"],
    url: '/nds/tools/searches/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSearch42c925e50350757508354d24b49ec126.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
const ViewSearch42c925e50350757508354d24b49ec126Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch42c925e50350757508354d24b49ec126.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Panels\Resources\Searches\Pages\ViewSearch::__invoke
* @see app/Filament/Panels/Resources/Searches/Pages/ViewSearch.php:7
* @route '/nds/tools/searches/{record}'
*/
ViewSearch42c925e50350757508354d24b49ec126Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSearch42c925e50350757508354d24b49ec126.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSearch42c925e50350757508354d24b49ec126.form = ViewSearch42c925e50350757508354d24b49ec126Form

const ViewSearch = {
    '/nds/booking/searches/{record}': ViewSearch1457e2c48bc4996e06d2f95be512b6bd,
    '/nds/chat/searches/{record}': ViewSearchfefe59097a80b5de71cc5c89986c3f77,
    '/nds/dev/searches/{record}': ViewSearch96d59c8cd3a0866b432b6edfacc8ebb0,
    '/nds/email/searches/{record}': ViewSearch617d0b3b23ebe9d5c76012697abb10b6,
    '/nds/files/searches/{record}': ViewSearch636a65f3579a2295a83bbf8be3ae90f5,
    '/nds/notify/searches/{record}': ViewSearch4af21ec6c42f540005910381a28c1d73,
    '/nds/queue/searches/{record}': ViewSearchdb170743e5ffdfc3889275b0b8fe7a9d,
    '/nds/tools/searches/{record}': ViewSearch42c925e50350757508354d24b49ec126,
}

export default ViewSearch