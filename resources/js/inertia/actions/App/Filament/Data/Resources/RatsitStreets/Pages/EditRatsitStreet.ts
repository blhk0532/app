import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
const EditRatsitStreet = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitStreet.url(args, options),
    method: 'get',
})

EditRatsitStreet.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-streets/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
EditRatsitStreet.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRatsitStreet.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
EditRatsitStreet.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitStreet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
EditRatsitStreet.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRatsitStreet.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
const EditRatsitStreetForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitStreet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
EditRatsitStreetForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitStreet.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitStreets\Pages\EditRatsitStreet::__invoke
* @see app/Filament/Data/Resources/RatsitStreets/Pages/EditRatsitStreet.php:7
* @route '/nds/data/databaser/ratsit-streets/{record}/edit'
*/
EditRatsitStreetForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitStreet.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRatsitStreet.form = EditRatsitStreetForm

export default EditRatsitStreet