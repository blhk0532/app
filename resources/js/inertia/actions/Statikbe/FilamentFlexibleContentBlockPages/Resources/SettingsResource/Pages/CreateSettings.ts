import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
const CreateSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSettings.url(options),
    method: 'get',
})

CreateSettings.definition = {
    methods: ["get","head"],
    url: '/blocks/settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
CreateSettings.url = (options?: RouteQueryOptions) => {
    return CreateSettings.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
CreateSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSettings.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
CreateSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSettings.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
const CreateSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSettings.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
CreateSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSettings.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\CreateSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/CreateSettings.php:7
* @route '/blocks/settings/create'
*/
CreateSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSettings.form = CreateSettingsForm

export default CreateSettings