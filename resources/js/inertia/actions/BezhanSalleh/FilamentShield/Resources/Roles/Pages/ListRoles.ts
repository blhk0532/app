import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
const ListRolese3a14f3226496c8653fb48ffe6f9bf07 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRolese3a14f3226496c8653fb48ffe6f9bf07.url(options),
    method: 'get',
})

ListRolese3a14f3226496c8653fb48ffe6f9bf07.definition = {
    methods: ["get","head"],
    url: '/nds/dev/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
ListRolese3a14f3226496c8653fb48ffe6f9bf07.url = (options?: RouteQueryOptions) => {
    return ListRolese3a14f3226496c8653fb48ffe6f9bf07.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
ListRolese3a14f3226496c8653fb48ffe6f9bf07.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRolese3a14f3226496c8653fb48ffe6f9bf07.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
ListRolese3a14f3226496c8653fb48ffe6f9bf07.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRolese3a14f3226496c8653fb48ffe6f9bf07.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
const ListRolese3a14f3226496c8653fb48ffe6f9bf07Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRolese3a14f3226496c8653fb48ffe6f9bf07.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
ListRolese3a14f3226496c8653fb48ffe6f9bf07Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRolese3a14f3226496c8653fb48ffe6f9bf07.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/dev/shield/roles'
*/
ListRolese3a14f3226496c8653fb48ffe6f9bf07Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRolese3a14f3226496c8653fb48ffe6f9bf07.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRolese3a14f3226496c8653fb48ffe6f9bf07.form = ListRolese3a14f3226496c8653fb48ffe6f9bf07Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
const ListRoles97ea2592ad6e707738ae83b8eefbf74d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

ListRoles97ea2592ad6e707738ae83b8eefbf74d.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.url = (options?: RouteQueryOptions) => {
    return ListRoles97ea2592ad6e707738ae83b8eefbf74d.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
const ListRoles97ea2592ad6e707738ae83b8eefbf74dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ListRoles::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ListRoles.php:7
* @route '/nds/super/shield/roles'
*/
ListRoles97ea2592ad6e707738ae83b8eefbf74dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListRoles97ea2592ad6e707738ae83b8eefbf74d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListRoles97ea2592ad6e707738ae83b8eefbf74d.form = ListRoles97ea2592ad6e707738ae83b8eefbf74dForm

const ListRoles = {
    '/nds/dev/shield/roles': ListRolese3a14f3226496c8653fb48ffe6f9bf07,
    '/nds/super/shield/roles': ListRoles97ea2592ad6e707738ae83b8eefbf74d,
}

export default ListRoles