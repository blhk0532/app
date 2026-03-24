import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
const EditRatsitData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitData.url(args, options),
    method: 'get',
})

EditRatsitData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
EditRatsitData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRatsitData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
EditRatsitData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
EditRatsitData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRatsitData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
const EditRatsitDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
EditRatsitDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\EditRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/EditRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}/edit'
*/
EditRatsitDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRatsitData.form = EditRatsitDataForm

export default EditRatsitData