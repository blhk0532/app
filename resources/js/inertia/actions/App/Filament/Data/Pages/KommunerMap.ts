import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
const KommunerMap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap.url(options),
    method: 'get',
})

KommunerMap.definition = {
    methods: ["get","head"],
    url: '/nds/data/kommuner-map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap.url = (options?: RouteQueryOptions) => {
    return KommunerMap.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KommunerMap.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: KommunerMap.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
const KommunerMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Pages\KommunerMap::__invoke
* @see app/Filament/Data/Pages/KommunerMap.php:7
* @route '/nds/data/kommuner-map'
*/
KommunerMapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: KommunerMap.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

KommunerMap.form = KommunerMapForm

export default KommunerMap