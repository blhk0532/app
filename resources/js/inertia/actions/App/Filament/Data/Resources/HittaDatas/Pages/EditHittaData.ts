import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
const EditHittaData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditHittaData.url(args, options),
    method: 'get',
})

EditHittaData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/hitta-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
EditHittaData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditHittaData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
EditHittaData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditHittaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
EditHittaData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditHittaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
const EditHittaDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditHittaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
EditHittaDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditHittaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\EditHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/EditHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}/edit'
*/
EditHittaDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditHittaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditHittaData.form = EditHittaDataForm

export default EditHittaData