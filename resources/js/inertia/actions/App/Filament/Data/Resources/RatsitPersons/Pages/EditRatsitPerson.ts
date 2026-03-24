import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
const EditRatsitPerson = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitPerson.url(args, options),
    method: 'get',
})

EditRatsitPerson.definition = {
    methods: ["get","head"],
    url: '/nds/data/databaser/ratsit-persons/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
EditRatsitPerson.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRatsitPerson.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
EditRatsitPerson.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRatsitPerson.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
EditRatsitPerson.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRatsitPerson.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
const EditRatsitPersonForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitPerson.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
EditRatsitPersonForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitPerson.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPersons\Pages\EditRatsitPerson::__invoke
* @see app/Filament/Data/Resources/RatsitPersons/Pages/EditRatsitPerson.php:7
* @route '/nds/data/databaser/ratsit-persons/{record}/edit'
*/
EditRatsitPersonForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRatsitPerson.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRatsitPerson.form = EditRatsitPersonForm

export default EditRatsitPerson