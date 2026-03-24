import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/data/ratsit-adresser/ratsit-adresses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitAdresser\Pages\ListRatsitAdresser::__invoke
* @see app/Filament/Data/Resources/RatsitAdresser/Pages/ListRatsitAdresser.php:7
* @route '/nds/data/ratsit-adresser/ratsit-adresses'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const ratsitAdresses = {
    index: Object.assign(index, index),
}

export default ratsitAdresses