import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
const ViewTallcmsContactSubmission = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTallcmsContactSubmission.url(args, options),
    method: 'get',
})

ViewTallcmsContactSubmission.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-contact-submissions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
ViewTallcmsContactSubmission.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewTallcmsContactSubmission.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
ViewTallcmsContactSubmission.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewTallcmsContactSubmission.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
ViewTallcmsContactSubmission.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewTallcmsContactSubmission.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
const ViewTallcmsContactSubmissionForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTallcmsContactSubmission.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
ViewTallcmsContactSubmissionForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTallcmsContactSubmission.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsContactSubmissions\Pages\ViewTallcmsContactSubmission::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsContactSubmissions/Pages/ViewTallcmsContactSubmission.php:7
* @route '/nds/dev/tallcms-contact-submissions/{record}'
*/
ViewTallcmsContactSubmissionForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewTallcmsContactSubmission.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewTallcmsContactSubmission.form = ViewTallcmsContactSubmissionForm

export default ViewTallcmsContactSubmission