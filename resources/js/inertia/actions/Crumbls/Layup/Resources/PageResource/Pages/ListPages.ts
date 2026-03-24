import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
const ListPages = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPages.url(options),
    method: 'get',
})

ListPages.definition = {
    methods: ["get","head"],
    url: '/nds/dev/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
ListPages.url = (options?: RouteQueryOptions) => {
    return ListPages.definition.url + queryParams(options)
}

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
ListPages.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPages.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
ListPages.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPages.url(options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
const ListPagesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPages.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
ListPagesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPages.url(options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\ListPages::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/ListPages.php:7
* @route '/nds/dev/pages'
*/
ListPagesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListPages.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListPages.form = ListPagesForm

export default ListPages