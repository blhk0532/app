import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
const EditRole4b0e80def8b7e078eb7d46a3aff155d2 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole4b0e80def8b7e078eb7d46a3aff155d2.url(args, options),
    method: 'get',
})

EditRole4b0e80def8b7e078eb7d46a3aff155d2.definition = {
    methods: ["get","head"],
    url: '/nds/dev/shield/roles/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
EditRole4b0e80def8b7e078eb7d46a3aff155d2.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRole4b0e80def8b7e078eb7d46a3aff155d2.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
EditRole4b0e80def8b7e078eb7d46a3aff155d2.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole4b0e80def8b7e078eb7d46a3aff155d2.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
EditRole4b0e80def8b7e078eb7d46a3aff155d2.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRole4b0e80def8b7e078eb7d46a3aff155d2.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
const EditRole4b0e80def8b7e078eb7d46a3aff155d2Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole4b0e80def8b7e078eb7d46a3aff155d2.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
EditRole4b0e80def8b7e078eb7d46a3aff155d2Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole4b0e80def8b7e078eb7d46a3aff155d2.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/dev/shield/roles/{record}/edit'
*/
EditRole4b0e80def8b7e078eb7d46a3aff155d2Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole4b0e80def8b7e078eb7d46a3aff155d2.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRole4b0e80def8b7e078eb7d46a3aff155d2.form = EditRole4b0e80def8b7e078eb7d46a3aff155d2Form
/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
const EditRole8da8545fa8d4a8244eecbf8cbb516792 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

EditRole8da8545fa8d4a8244eecbf8cbb516792.definition = {
    methods: ["get","head"],
    url: '/nds/super/shield/roles/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRole8da8545fa8d4a8244eecbf8cbb516792.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
const EditRole8da8545fa8d4a8244eecbf8cbb516792Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentShield\Resources\Roles\Pages\EditRole::__invoke
* @see vendor/bezhansalleh/filament-shield/src/Resources/Roles/Pages/EditRole.php:7
* @route '/nds/super/shield/roles/{record}/edit'
*/
EditRole8da8545fa8d4a8244eecbf8cbb516792Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditRole8da8545fa8d4a8244eecbf8cbb516792.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditRole8da8545fa8d4a8244eecbf8cbb516792.form = EditRole8da8545fa8d4a8244eecbf8cbb516792Form

const EditRole = {
    '/nds/dev/shield/roles/{record}/edit': EditRole4b0e80def8b7e078eb7d46a3aff155d2,
    '/nds/super/shield/roles/{record}/edit': EditRole8da8545fa8d4a8244eecbf8cbb516792,
}

export default EditRole