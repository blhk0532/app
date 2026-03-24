import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
const ListRatsitAdresser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitAdresser.url(options),
    method: 'get',
})

ListRatsitAdresser.definition = {
    methods: ["get","head"],
    url: '/nds/data/ratsit-adresser/ratsit-adresses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
ListRatsitAdresser.url = (options?: RouteQueryOptions) => {
    return ListRatsitAdresser.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
ListRatsitAdresser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitAdresser.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
ListRatsitAdresser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitAdresser.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
const ListRatsitAdresserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitAdresser.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
ListRatsitAdresserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitAdresser.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
ListRatsitAdresserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitAdresser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitAdresser.form = ListRatsitAdresserForm

export default ListRatsitAdresser