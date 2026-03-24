import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blocks/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ListPages::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/blocks/pages'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blocks/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\CreatePage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/CreatePage.php:7
* @route '/blocks/pages/create'
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
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
export const edit = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blocks/pages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
edit.url = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { record: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: typeof args.record === 'object'
        ? args.record.id
        : args.record,
    }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
edit.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
edit.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
const editForm = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
editForm.get = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\EditPage::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/blocks/pages/{record}/edit'
*/
editForm.head = (args: { record: string | number | { id: string | number } } | [record: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
export const tree = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tree.url(options),
    method: 'get',
})

tree.definition = {
    methods: ["get","head"],
    url: '/blocks/pages/tree',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
tree.url = (options?: RouteQueryOptions) => {
    return tree.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
tree.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tree.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
tree.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tree.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
const treeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
treeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\PageResource\Pages\ManagePageTree::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/PageResource/Pages/ManagePageTree.php:7
* @route '/blocks/pages/tree'
*/
treeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tree.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tree.form = treeForm

const pages = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
    tree: Object.assign(tree, tree),
}

export default pages