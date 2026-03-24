import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url(args, options),
    method: 'get',
})

CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/admin/{tenant}/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6.form = CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6Form
/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.definition = {
    methods: ["get","head"],
    url: '/nds/super/outcome-delay-settings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url = (options?: RouteQueryOptions) => {
    return CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
const CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Admin\Resources\OutcomeDelaySettings\Pages\CreateOutcomeDelaySetting::__invoke
* @see app/Filament/Admin/Resources/OutcomeDelaySettings/Pages/CreateOutcomeDelaySetting.php:7
* @route '/nds/super/outcome-delay-settings/create'
*/
CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966.form = CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966Form

const CreateOutcomeDelaySetting = {
    '/admin/{tenant}/outcome-delay-settings/create': CreateOutcomeDelaySetting488f98148e455c0da57fcbb2eb6c60c6,
    '/nds/super/outcome-delay-settings/create': CreateOutcomeDelaySetting89e9c6b6f0b3bff345c69f599e7e8966,
}

export default CreateOutcomeDelaySetting