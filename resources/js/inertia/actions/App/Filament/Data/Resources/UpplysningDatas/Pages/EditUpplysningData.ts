import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
const EditUpplysningData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUpplysningData.url(args, options),
    method: 'get',
})

EditUpplysningData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/upplysning-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
EditUpplysningData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUpplysningData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
EditUpplysningData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUpplysningData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
EditUpplysningData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUpplysningData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
const EditUpplysningDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUpplysningData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
EditUpplysningDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUpplysningData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\UpplysningDatas\Pages\EditUpplysningData::__invoke
* @see app/Filament/Data/Resources/UpplysningDatas/Pages/EditUpplysningData.php:7
* @route '/nds/data/databaser/upplysning-data/{record}/edit'
*/
EditUpplysningDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUpplysningData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUpplysningData.form = EditUpplysningDataForm

export default EditUpplysningData