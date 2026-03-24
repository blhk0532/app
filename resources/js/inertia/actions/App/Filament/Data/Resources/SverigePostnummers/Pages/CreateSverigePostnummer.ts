import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
const CreateSverigePostnummer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSverigePostnummer.url(options),
    method: 'get',
})

CreateSverigePostnummer.definition = {
    methods: ["get","head"],
    url: '/nds/data/sverige-postnummer/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
CreateSverigePostnummer.url = (options?: RouteQueryOptions) => {
    return CreateSverigePostnummer.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
CreateSverigePostnummer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSverigePostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
CreateSverigePostnummer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSverigePostnummer.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
const CreateSverigePostnummerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSverigePostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
CreateSverigePostnummerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSverigePostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/CreateSverigePostnummer.php:7
* @route '/nds/data/sverige-postnummer/create'
*/
CreateSverigePostnummerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSverigePostnummer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSverigePostnummer.form = CreateSverigePostnummerForm

export default CreateSverigePostnummer