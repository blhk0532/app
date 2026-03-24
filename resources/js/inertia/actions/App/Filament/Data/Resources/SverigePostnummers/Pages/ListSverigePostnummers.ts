import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
const ListSverigePostnummers = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSverigePostnummers.url(options),
    method: 'get',
})

ListSverigePostnummers.definition = {
    methods: ["get","head"],
    url: '/nds/data/sverige-postnummer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
ListSverigePostnummers.url = (options?: RouteQueryOptions) => {
    return ListSverigePostnummers.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
ListSverigePostnummers.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListSverigePostnummers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
ListSverigePostnummers.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListSverigePostnummers.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
const ListSverigePostnummersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSverigePostnummers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
ListSverigePostnummersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSverigePostnummers.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers::__invoke
* @see app/Filament/Data/Resources/SverigePostnummers/Pages/ListSverigePostnummers.php:7
* @route '/nds/data/sverige-postnummer'
*/
ListSverigePostnummersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListSverigePostnummers.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListSverigePostnummers.form = ListSverigePostnummersForm

export default ListSverigePostnummers