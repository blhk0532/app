import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
const CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url(args, options),
    method: 'get',
})

CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
const CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/admin/{tenant}/outcome-settings/create'
*/
CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8.form = CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8Form
/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
const CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
const CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeSettings/Pages/CreateOutcomeSetting.php:7
* @route '/nds/super/outcome-settings/create'
*/
CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18.form = CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18Form

const CreateOutcomeSetting = {
    '/admin/{tenant}/outcome-settings/create': CreateOutcomeSettingb97c4a3111daff3addd3615d35f64ea8,
    '/nds/super/outcome-settings/create': CreateOutcomeSetting96e11db29d41c7c0427c6fa980838f18,
}

export default CreateOutcomeSetting