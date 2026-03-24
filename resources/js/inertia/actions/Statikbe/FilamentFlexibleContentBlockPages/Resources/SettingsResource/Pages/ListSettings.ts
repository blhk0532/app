import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
const ListSettings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSettings.url(options),
    method: 'get',
})

ListSettings.definition = {
    methods: ["get","head"],
    url: '/blocks/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
ListSettings.url = (options?: RouteQueryOptions) => {
    return ListSettings.definition.url + queryParams(options)
}

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
ListSettings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSettings.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
ListSettings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSettings.url(options),
    method: 'head',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
const ListSettingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSettings.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
ListSettingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSettings.url(options),
    method: 'get',
})

/**
* @see \Statikbe\FilamentFlexibleContentBlockPages\Resources\SettingsResource\Pages\ListSettings::__invoke
* @see vendor/statikbe/laravel-filament-flexible-content-block-pages/src/Resources/SettingsResource/Pages/ListSettings.php:7
* @route '/blocks/settings'
*/
ListSettingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSettings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSettings.form = ListSettingsForm

export default ListSettings