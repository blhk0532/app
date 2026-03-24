import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
const ListRatsitPostorter = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitPostorter.url(options),
    method: 'get',
})

ListRatsitPostorter.definition = {
    methods: ["get","head"],
    url: '/nds/data/ratsit-postorter/ratsit-postorts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
ListRatsitPostorter.url = (options?: RouteQueryOptions) => {
    return ListRatsitPostorter.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
ListRatsitPostorter.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRatsitPostorter.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
ListRatsitPostorter.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRatsitPostorter.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
const ListRatsitPostorterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPostorter.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
ListRatsitPostorterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPostorter.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter::__invoke
* @see app/Filament/Data/Resources/RatsitPostorter/Pages/ListRatsitPostorter.php:7
* @route '/nds/data/ratsit-postorter/ratsit-postorts'
*/
ListRatsitPostorterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRatsitPostorter.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRatsitPostorter.form = ListRatsitPostorterForm

export default ListRatsitPostorter