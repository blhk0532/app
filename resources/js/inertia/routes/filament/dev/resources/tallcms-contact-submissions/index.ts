import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-contact-submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ListTallcmsContactSubmissions::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ListTallcmsContactSubmissions.php:7
* @route '/nds/dev/tallcms-contact-submissions'
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
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-contact-submissions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
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
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
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

const tallcmsContactSubmissions = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default tallcmsContactSubmissions