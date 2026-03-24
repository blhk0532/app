import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
const ViewSverigePostnummer = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSverigePostnummer.url(args, options),
    method: 'get',
})

ViewSverigePostnummer.definition = {
    methods: ["get","head"],
    url: '/nds/data/sverige-postnummer/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
ViewSverigePostnummer.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewSverigePostnummer.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
ViewSverigePostnummer.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewSverigePostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
ViewSverigePostnummer.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewSverigePostnummer.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
const ViewSverigePostnummerForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSverigePostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
ViewSverigePostnummerForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSverigePostnummer.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ViewSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/{record}'
*/
ViewSverigePostnummerForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewSverigePostnummer.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewSverigePostnummer.form = ViewSverigePostnummerForm

export default ViewSverigePostnummer