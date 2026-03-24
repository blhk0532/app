import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
export const verify = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(args, options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/nds/super/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
verify.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            email: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        email: args.email,
    }

    return verify.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
verify.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
verify.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
const verifyForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
verifyForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
verifyForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: verify.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

verify.form = verifyForm

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
export const blockVerification = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blockVerification.url(args, options),
    method: 'get',
})

blockVerification.definition = {
    methods: ["get","head"],
    url: '/nds/super/email-change-verification/verify/{id}/{email}/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
blockVerification.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            email: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        email: args.email,
    }

    return blockVerification.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
blockVerification.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blockVerification.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
blockVerification.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blockVerification.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
const blockVerificationForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blockVerification.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
blockVerificationForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blockVerification.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
blockVerificationForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: blockVerification.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

blockVerification.form = blockVerificationForm

const emailChangeVerification = {
    verify: Object.assign(verify, verify),
    blockVerification: Object.assign(blockVerification, blockVerification),
}

export default emailChangeVerification