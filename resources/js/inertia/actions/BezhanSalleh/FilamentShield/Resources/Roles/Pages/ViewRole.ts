import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
const ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url(args, options),
    method: 'get',
})

ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.definition = {
    methods: ["get","head"],
    url: '/nds/dev/shield/roles/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
const ViewRoled0bdec7a4837f51f1b8e944fa90a4eebForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
ViewRoled0bdec7a4837f51f1b8e944fa90a4eebForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/dev/shield/roles/{record}'
*/
ViewRoled0bdec7a4837f51f1b8e944fa90a4eebForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb.form = ViewRoled0bdec7a4837f51f1b8e944fa90a4eebForm
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
const ViewRole5e9081f7016bfe540266d3bf96b54521 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

ViewRole5e9081f7016bfe540266d3bf96b54521.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return ViewRole5e9081f7016bfe540266d3bf96b54521.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
const ViewRole5e9081f7016bfe540266d3bf96b54521Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\ViewRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/ViewRole.php:7
* @route '/nds/super/shield/roles/{record}'
*/
ViewRole5e9081f7016bfe540266d3bf96b54521Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewRole5e9081f7016bfe540266d3bf96b54521.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewRole5e9081f7016bfe540266d3bf96b54521.form = ViewRole5e9081f7016bfe540266d3bf96b54521Form

const ViewRole = {
    '/nds/dev/shield/roles/{record}': ViewRoled0bdec7a4837f51f1b8e944fa90a4eeb,
    '/nds/super/shield/roles/{record}': ViewRole5e9081f7016bfe540266d3bf96b54521,
}

export default ViewRole