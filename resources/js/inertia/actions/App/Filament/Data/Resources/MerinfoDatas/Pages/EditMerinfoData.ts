import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
const EditMerinfoData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMerinfoData.url(args, options),
    method: 'get',
})

EditMerinfoData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/merinfo-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
EditMerinfoData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditMerinfoData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
EditMerinfoData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMerinfoData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
EditMerinfoData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMerinfoData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
const EditMerinfoDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMerinfoData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
EditMerinfoDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMerinfoData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\MerinfoDatas\Pages\EditMerinfoData::__invoke
* @see app/Filament/Data/Resources/MerinfoDatas/Pages/EditMerinfoData.php:7
* @route '/nds/data/databaser/merinfo-data/{record}/edit'
*/
EditMerinfoDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMerinfoData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMerinfoData.form = EditMerinfoDataForm

export default EditMerinfoData