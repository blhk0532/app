import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/data/ratsit-kommuner/ratsit-kommuns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner::__invoke
* @see app/Filament/Data/Resources/RatsitKommuner/Pages/ListRatsitKommuner.php:7
* @route '/nds/data/ratsit-kommuner/ratsit-kommuns'
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

const ratsitKommuns = {
    index: Object.assign(index, index),
}

export default ratsitKommuns