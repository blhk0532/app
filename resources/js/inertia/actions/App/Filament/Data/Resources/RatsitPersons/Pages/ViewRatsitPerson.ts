import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
const ViewRatsitPerson = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitPerson.url(args, options),
    method: 'get',
})

ViewRatsitPerson.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
ViewRatsitPerson.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewRatsitPerson.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
ViewRatsitPerson.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRatsitPerson.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
ViewRatsitPerson.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRatsitPerson.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
const ViewRatsitPersonForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitPerson.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
ViewRatsitPersonForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitPerson.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\ViewRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/ViewRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}'
*/
ViewRatsitPersonForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRatsitPerson.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRatsitPerson.form = ViewRatsitPersonForm

export default ViewRatsitPerson