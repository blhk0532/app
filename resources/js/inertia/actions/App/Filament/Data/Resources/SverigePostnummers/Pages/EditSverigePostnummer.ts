import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
const EditSverigePostnummer = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSverigePostnummer.url(args, options),
    method: 'get',
})

EditSverigePostnummer.definition = {
    methods: ["get","head"],
    url: '/nds/data/sverige-postnummer/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
EditSverigePostnummer.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSverigePostnummer.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
EditSverigePostnummer.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSverigePostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
EditSverigePostnummer.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSverigePostnummer.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
const EditSverigePostnummerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSverigePostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
EditSverigePostnummerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSverigePostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/EditSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}/edit'
*/
EditSverigePostnummerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSverigePostnummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSverigePostnummer.form = EditSverigePostnummerForm

export default EditSverigePostnummer