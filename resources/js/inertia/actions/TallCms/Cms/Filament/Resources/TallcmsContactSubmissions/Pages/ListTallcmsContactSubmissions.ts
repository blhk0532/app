import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
const ListTallcmsContactSubmissions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsContactSubmissions.url(options),
    method: 'get',
})

ListTallcmsContactSubmissions.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-contact-submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissions.url = (options?: RouteQueryOptions) => {
    return ListTallcmsContactSubmissions.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListTallcmsContactSubmissions.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListTallcmsContactSubmissions.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
const ListTallcmsContactSubmissionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsContactSubmissions.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsContactSubmissions.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
ListTallcmsContactSubmissionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListTallcmsContactSubmissions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListTallcmsContactSubmissions.form = ListTallcmsContactSubmissionsForm

export default ListTallcmsContactSubmissions