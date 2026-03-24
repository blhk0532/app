import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
const CreateMerinfo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMerinfo.url(options),
    method: 'get',
})

CreateMerinfo.definition = {
    methods: ["get","head"],
    url: '/nds/data/merinfos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
CreateMerinfo.url = (options?: RouteQueryOptions) => {
    return CreateMerinfo.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
CreateMerinfo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMerinfo.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
CreateMerinfo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMerinfo.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
const CreateMerinfoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMerinfo.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
CreateMerinfoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMerinfo.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\CreateMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/CreateMerinfo.php:7
* @route '/nds/data/merinfos/create'
*/
CreateMerinfoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateMerinfo.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateMerinfo.form = CreateMerinfoForm

export default CreateMerinfo