import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
export const index = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
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
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
index.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
index.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
const indexForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
*/
indexForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data'
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
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
export const create = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
create.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
create.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
create.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
const createForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
createForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
createForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
export const queue = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: queue.url(args, options),
    method: 'get',
})

queue.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
queue.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return queue.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
queue.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: queue.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
queue.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: queue.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
const queueForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
queueForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/QueueRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/queue'
*/
queueForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: queue.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

queue.form = queueForm

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
export const view = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
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
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
view.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
view.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
const viewForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
*/
viewForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/ViewRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}'
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
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
export const edit = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
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
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
edit.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
edit.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
const editForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
editForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
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

const data = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    queue: Object.assign(queue, queue),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default data