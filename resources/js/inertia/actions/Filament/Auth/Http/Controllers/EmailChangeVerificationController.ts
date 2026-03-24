import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url(args, options),
    method: 'get',
})

EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.definition = {
    methods: ["get","head"],
    url: '/admin/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaaForm = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaaForm.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/admin/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaaForm.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa.form = EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaaForm
/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0 = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.definition = {
    methods: ["get","head"],
    url: '/nds/super/email-change-verification/verify/{id}/{email}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions) => {
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

    return EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{email}', parsedArgs.email.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'head',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
const EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form.get = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, options),
    method: 'get',
})

/**
* @see \Filament\Auth\Http\Controllers\EmailChangeVerificationController::__invoke
* @see vendor/filament/filament/src/Auth/Http/Controllers/EmailChangeVerificationController.php:11
* @route '/nds/super/email-change-verification/verify/{id}/{email}'
*/
EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form.head = (args: { id: string | number, email: string | number } | [id: string | number, email: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0.form = EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0Form

const EmailChangeVerificationController = {
    '/admin/email-change-verification/verify/{id}/{email}': EmailChangeVerificationControllere912a2971183f55ea65eb2d6350f6eaa,
    '/nds/super/email-change-verification/verify/{id}/{email}': EmailChangeVerificationController0f462b9cf546d6104afca4d8d7a98cb0,
}

export default EmailChangeVerificationController