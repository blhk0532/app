import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
const EditSettings = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSettings.url(args, options),
    method: 'get',
})

EditSettings.definition = {
    methods: ["get","head"],
    url: '/blocks/settings/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
EditSettings.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSettings.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
EditSettings.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSettings.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
EditSettings.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSettings.url(args, options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
const EditSettingsForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSettings.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
EditSettingsForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSettings.url(args, options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\EditSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/EditSettings.php:7
* @route '/blocks/settings/{record}/edit'
*/
EditSettingsForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSettings.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSettings.form = EditSettingsForm

export default EditSettings