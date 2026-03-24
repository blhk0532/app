import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
const ViewRatsitData = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitData.url(args, options),
    method: 'get',
})

ViewRatsitData.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-data/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
ViewRatsitData.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRatsitData.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
ViewRatsitData.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
ViewRatsitData.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRatsitData.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
const ViewRatsitDataForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
ViewRatsitDataForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitData.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitDatas\Pages\ViewRatsitData::__invoke
* @see app/Filament/Data/Resources/RatsitDatas/Pages/ViewRatsitData.php:7
* @route '/nds/data/databaser/ratsit-data/{record}'
*/
ViewRatsitDataForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitData.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRatsitData.form = ViewRatsitDataForm

export default ViewRatsitData