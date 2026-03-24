import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/dev/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
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
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/dev/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\CreatePage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/nds/dev/pages/create'
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
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/dev/pages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
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
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
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

const pages = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default pages