import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
const ViewHittaData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewHittaData.url(args, options),
    method: 'get',
})

ViewHittaData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/hitta-data/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
ViewHittaData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewHittaData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
ViewHittaData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewHittaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
ViewHittaData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewHittaData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
const ViewHittaDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewHittaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
ViewHittaDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewHittaData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\HittaDatas\Pages\ViewHittaData::__invoke
* @see app/Filament/Data/Resources/HittaDatas/Pages/ViewHittaData.php:7
* @route '/nds/data/databaser/hitta-data/{record}'
*/
ViewHittaDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewHittaData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewHittaData.form = ViewHittaDataForm

export default ViewHittaData