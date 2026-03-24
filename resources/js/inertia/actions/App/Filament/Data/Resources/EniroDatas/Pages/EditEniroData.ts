import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
const EditEniroData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEniroData.url(args, options),
    method: 'get',
})

EditEniroData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/eniro-data/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
EditEniroData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditEniroData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
EditEniroData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditEniroData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
EditEniroData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditEniroData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
const EditEniroDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEniroData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
EditEniroDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEniroData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\EniroDatas\Pages\EditEniroData::__invoke
* @see app/Filament/Data/Resources/EniroDatas/Pages/EditEniroData.php:7
* @route '/nds/data/databaser/eniro-data/{record}/edit'
*/
EditEniroDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditEniroData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditEniroData.form = EditEniroDataForm

export default EditEniroData