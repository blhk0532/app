import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ListRatsitPersons::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ListRatsitPersons.php:7
* @route '/nds/data/databaser/ratsit-persons'
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
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\CreateRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/CreateRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/create'
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
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
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
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
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
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
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
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
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

const ratsitPersons = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    view: Object.assign(view, view),
    edit: Object.assign(edit, edit),
}

export default ratsitPersons