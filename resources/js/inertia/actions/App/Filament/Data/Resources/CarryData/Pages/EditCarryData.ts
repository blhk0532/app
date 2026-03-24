import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
const EditCarryData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCarryData.url(args, options),
    method: 'get',
})

EditCarryData.definition = {
    methods: ["get","head"],
    url: '/nds/data/carry-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
EditCarryData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCarryData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
EditCarryData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCarryData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
EditCarryData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCarryData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
const EditCarryDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCarryData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
EditCarryDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCarryData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\CarryData\Pages\EditCarryData::__invoke
* @see app/Filament/Data/Resources/CarryData/Pages/EditCarryData.php:7
* @route '/nds/data/carry-data/{record}/edit'
*/
EditCarryDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCarryData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCarryData.form = EditCarryDataForm

export default EditCarryData