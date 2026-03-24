import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
const EditRingaData = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData.url(args, options),
    method: 'get',
})

EditRingaData.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/ringa/data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return EditRingaData.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaData.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRingaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
const EditRingaDataForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDataForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\RingaDatas\Pages\EditRingaData::__invoke
* @see app/Filament/App/Resources/RingaDatas/Pages/EditRingaData.php:7
* @route '/nds/app/team/{tenant}/ringa/data/{record}/edit'
*/
EditRingaDataForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRingaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRingaData.form = EditRingaDataForm

export default EditRingaData