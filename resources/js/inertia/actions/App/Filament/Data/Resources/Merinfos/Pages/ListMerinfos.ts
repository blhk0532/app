import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
const ListMerinfos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMerinfos.url(options),
    method: 'get',
})

ListMerinfos.definition = {
    methods: ["get","head"],
    url: '/nds/data/merinfos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
ListMerinfos.url = (options?: RouteQueryOptions) => {
    return ListMerinfos.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
ListMerinfos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMerinfos.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
ListMerinfos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMerinfos.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
const ListMerinfosForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMerinfos.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
ListMerinfosForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMerinfos.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\ListMerinfos::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/ListMerinfos.php:7
* @route '/nds/data/merinfos'
*/
ListMerinfosForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMerinfos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMerinfos.form = ListMerinfosForm

export default ListMerinfos