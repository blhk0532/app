import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
const CreateRingaData = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData.url(args, options),
    method: 'get',
})

CreateRingaData.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateRingaData.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaData.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRingaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
const CreateRingaDataForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaDataForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/CreateRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/create'
*/
CreateRingaDataForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRingaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRingaData.form = CreateRingaDataForm

export default CreateRingaData