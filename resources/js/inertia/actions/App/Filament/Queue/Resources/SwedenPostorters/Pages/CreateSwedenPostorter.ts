import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
const CreateSwedenPostorter = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSwedenPostorter.url(options),
    method: 'get',
})

CreateSwedenPostorter.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
CreateSwedenPostorter.url = (options?: RouteQueryOptions) => {
    return CreateSwedenPostorter.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
CreateSwedenPostorter.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateSwedenPostorter.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
CreateSwedenPostorter.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateSwedenPostorter.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
const CreateSwedenPostorterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenPostorter.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
CreateSwedenPostorterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenPostorter.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/CreateSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/create'
*/
CreateSwedenPostorterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateSwedenPostorter.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateSwedenPostorter.form = CreateSwedenPostorterForm

export default CreateSwedenPostorter