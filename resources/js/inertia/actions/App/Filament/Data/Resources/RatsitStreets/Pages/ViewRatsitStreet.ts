import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
const ViewRatsitStreet = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitStreet.url(args, options),
    method: 'get',
})

ViewRatsitStreet.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-streets/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
ViewRatsitStreet.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRatsitStreet.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
ViewRatsitStreet.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitStreet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
ViewRatsitStreet.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRatsitStreet.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
const ViewRatsitStreetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitStreet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
ViewRatsitStreetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitStreet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\ViewRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/ViewRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}'
*/
ViewRatsitStreetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitStreet.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRatsitStreet.form = ViewRatsitStreetForm

export default ViewRatsitStreet