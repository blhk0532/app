import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
const EditTallcmsMedia = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTallcmsMedia.url(args, options),
    method: 'get',
})

EditTallcmsMedia.definition = {
    methods: ["get","head"],
    url: '/nds/dev/tallcms-media/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
EditTallcmsMedia.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditTallcmsMedia.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
EditTallcmsMedia.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditTallcmsMedia.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
EditTallcmsMedia.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditTallcmsMedia.url(args, options),
    method: 'head',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
const EditTallcmsMediaForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMedia.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
EditTallcmsMediaForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMedia.url(args, options),
    method: 'get',
})

/**
* @see \TallCms\Cms\Filament\Resources\TallcmsMedia\Pages\EditTallcmsMedia::__invoke
* @see plugins/tallcms/tallcms/packages/tallcms/cms/src/Filament/Resources/TallcmsMedia/Pages/EditTallcmsMedia.php:7
* @route '/nds/dev/tallcms-media/{record}/edit'
*/
EditTallcmsMediaForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditTallcmsMedia.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditTallcmsMedia.form = EditTallcmsMediaForm

export default EditTallcmsMedia