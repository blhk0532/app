import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ListSwedenPostorters.php:7
* @route '/nds/queue/sweden-postorters'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/ViewSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const swedenPostorters = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default swedenPostorters