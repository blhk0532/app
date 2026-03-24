import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
const ListRingaData = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData.url(args, options),
    method: 'get',
})

ListRingaData.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/nummer/lista',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaData.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListRingaData.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaData.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaData.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRingaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
const ListRingaDataForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaData\Pages\ListRingaData::__invoke
* @see app/Filament/App/Resources/RingaData/Pages/ListRingaData.php:7
* @route '/nds/app/team/{tenant}/nummer/lista'
*/
ListRingaDataForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRingaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRingaData.form = ListRingaDataForm

export default ListRingaData