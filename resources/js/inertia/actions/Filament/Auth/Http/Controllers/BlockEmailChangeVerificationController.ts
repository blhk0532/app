import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
const BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3 = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url(args, options),
    method: 'get',
})

BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.definition = {
    methods: ["get","head"],
    url: '/admin/email-change-verification/verify/{id}/{email}/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
const BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3Form = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3Form.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3Form.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3.form = BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3Form
/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
const BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url(args, options),
    method: 'get',
})

BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.definition = {
    methods: ["get","head"],
    url: '/nds/super/email-change-verification/verify/{id}/{email}/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
const BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68fForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68fForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\BlockEmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/BlockEmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}/block'
*/
BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68fForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f.form = BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68fForm

const BlockEmailChangeVerificationController = {
    '/admin/email-change-verification/verify/{id}/{email}/block': BlockEmailChangeVerificationController67b2660107735d01f3decb12bcd3fdc3,
    '/nds/super/email-change-verification/verify/{id}/{email}/block': BlockEmailChangeVerificationController2a5c54e3e14f1ab53a5f7e066d35d68f,
}

export default BlockEmailChangeVerificationController