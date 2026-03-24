import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
const CreateRole6a9ecf988ec3e5e30e96474fa5960d85 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url(options),
    method: 'get',
})

CreateRole6a9ecf988ec3e5e30e96474fa5960d85.definition = {
    methods: ["get","head"],
    url: '/nds/dev/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url = (options?: RouteQueryOptions) => {
    return CreateRole6a9ecf988ec3e5e30e96474fa5960d85.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
CreateRole6a9ecf988ec3e5e30e96474fa5960d85.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
CreateRole6a9ecf988ec3e5e30e96474fa5960d85.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
const CreateRole6a9ecf988ec3e5e30e96474fa5960d85Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
CreateRole6a9ecf988ec3e5e30e96474fa5960d85Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/dev/shield/roles/create'
*/
CreateRole6a9ecf988ec3e5e30e96474fa5960d85Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole6a9ecf988ec3e5e30e96474fa5960d85.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRole6a9ecf988ec3e5e30e96474fa5960d85.form = CreateRole6a9ecf988ec3e5e30e96474fa5960d85Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
const CreateRole11e055d7abeddef45d22dea3c46b678f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

CreateRole11e055d7abeddef45d22dea3c46b678f.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.url = (options?: RouteQueryOptions) => {
    return CreateRole11e055d7abeddef45d22dea3c46b678f.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
const CreateRole11e055d7abeddef45d22dea3c46b678fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\CreateRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/CreateRole.php:7
* @route '/nds/super/shield/roles/create'
*/
CreateRole11e055d7abeddef45d22dea3c46b678fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateRole11e055d7abeddef45d22dea3c46b678f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateRole11e055d7abeddef45d22dea3c46b678f.form = CreateRole11e055d7abeddef45d22dea3c46b678fForm

const CreateRole = {
    '/nds/dev/shield/roles/create': CreateRole6a9ecf988ec3e5e30e96474fa5960d85,
    '/nds/super/shield/roles/create': CreateRole11e055d7abeddef45d22dea3c46b678f,
}

export default CreateRole