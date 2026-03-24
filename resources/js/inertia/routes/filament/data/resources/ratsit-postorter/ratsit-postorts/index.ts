import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/data/ratsit-postorter/ratsit-postorts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
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

const ratsitPostorts = {
    index: Object.assign(index, index),
}

export default ratsitPostorts