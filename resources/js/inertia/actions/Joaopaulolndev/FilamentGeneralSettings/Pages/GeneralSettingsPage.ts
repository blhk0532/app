import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
const GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url(options),
    method: 'get',
})

GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.definition = {
    methods: ["get","head"],
    url: '/nds/dev/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url = (options?: RouteQueryOptions) => {
    return GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
const GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bcForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bcForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/dev/general-settings-page'
*/
GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bcForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc.form = GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bcForm
/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
const GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.definition = {
    methods: ["get","head"],
    url: '/nds/super/general-settings-page',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url = (options?: RouteQueryOptions) => {
    return GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.definition.url + queryParams(options)
}

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'head',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
const GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url(options),
    method: 'get',
})

/**
* @see \Joaopaulolndev\FilamentGeneralSettings\Pages\GeneralSettingsPage::__invoke
* @see plugins/joaopaulolndev/filament-general-settings/src/Pages/GeneralSettingsPage.php:7
* @route '/nds/super/general-settings-page'
*/
GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae.form = GeneralSettingsPageaf862ec695393231f1ae7268ddc791aeForm

const GeneralSettingsPage = {
    '/nds/dev/general-settings-page': GeneralSettingsPage0dc842d15886289204fcee8fcaf6d6bc,
    '/nds/super/general-settings-page': GeneralSettingsPageaf862ec695393231f1ae7268ddc791ae,
}

export default GeneralSettingsPage