import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import preview from './preview'
import contact from './contact'
import comments from './comments'
import media from './media'
import seo from './seo'
import cms from './cms'
/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/cms/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Livewire\SearchResults::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Livewire/SearchResults.php:7
* @route '/cms/search'
*/
searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

const tallcms = {
    preview: Object.assign(preview, preview),
    contact: Object.assign(contact, contact),
    comments: Object.assign(comments, comments),
    media: Object.assign(media, media),
    seo: Object.assign(seo, seo),
    cms: Object.assign(cms, cms),
    search: Object.assign(search, search),
}

export default tallcms