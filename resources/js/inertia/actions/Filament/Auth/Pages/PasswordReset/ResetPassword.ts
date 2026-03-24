import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
const ResetPasswordd096dc006a997099292c2039656ab754 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordd096dc006a997099292c2039656ab754.url(options),
    method: 'get',
})

ResetPasswordd096dc006a997099292c2039656ab754.definition = {
    methods: ["get","head"],
    url: '/admin/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
ResetPasswordd096dc006a997099292c2039656ab754.url = (options?: RouteQueryOptions) => {
    return ResetPasswordd096dc006a997099292c2039656ab754.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
ResetPasswordd096dc006a997099292c2039656ab754.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordd096dc006a997099292c2039656ab754.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
ResetPasswordd096dc006a997099292c2039656ab754.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordd096dc006a997099292c2039656ab754.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
const ResetPasswordd096dc006a997099292c2039656ab754Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordd096dc006a997099292c2039656ab754.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
ResetPasswordd096dc006a997099292c2039656ab754Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordd096dc006a997099292c2039656ab754.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/admin/password-reset/reset'
*/
ResetPasswordd096dc006a997099292c2039656ab754Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordd096dc006a997099292c2039656ab754.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordd096dc006a997099292c2039656ab754.form = ResetPasswordd096dc006a997099292c2039656ab754Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
const ResetPassworde958504616843ced0a5bec0ef9eee292 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

ResetPassworde958504616843ced0a5bec0ef9eee292.definition = {
    methods: ["get","head"],
    url: '/nds/app/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.url = (options?: RouteQueryOptions) => {
    return ResetPassworde958504616843ced0a5bec0ef9eee292.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
const ResetPassworde958504616843ced0a5bec0ef9eee292Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/app/password-reset/reset'
*/
ResetPassworde958504616843ced0a5bec0ef9eee292Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassworde958504616843ced0a5bec0ef9eee292.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassworde958504616843ced0a5bec0ef9eee292.form = ResetPassworde958504616843ced0a5bec0ef9eee292Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
const ResetPassword4f89c44c35a7c227994d42b0f3b12f3c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url = (options?: RouteQueryOptions) => {
    return ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
const ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/calendar/password-reset/reset'
*/
ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword4f89c44c35a7c227994d42b0f3b12f3c.form = ResetPassword4f89c44c35a7c227994d42b0f3b12f3cForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
const ResetPassword570063cd6633a1432398e8411983d0ed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

ResetPassword570063cd6633a1432398e8411983d0ed.definition = {
    methods: ["get","head"],
    url: '/nds/chat/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.url = (options?: RouteQueryOptions) => {
    return ResetPassword570063cd6633a1432398e8411983d0ed.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0ed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
const ResetPassword570063cd6633a1432398e8411983d0edForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0edForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/chat/password-reset/reset'
*/
ResetPassword570063cd6633a1432398e8411983d0edForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword570063cd6633a1432398e8411983d0ed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword570063cd6633a1432398e8411983d0ed.form = ResetPassword570063cd6633a1432398e8411983d0edForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
const ResetPasswordf19594ec2410f93dd79b5c8ca9330d53 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.definition = {
    methods: ["get","head"],
    url: '/nds/dev/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url = (options?: RouteQueryOptions) => {
    return ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
const ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/dev/password-reset/reset'
*/
ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordf19594ec2410f93dd79b5c8ca9330d53.form = ResetPasswordf19594ec2410f93dd79b5c8ca9330d53Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
const ResetPassword6124c04be7fd20421395a9b0dab3d314 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

ResetPassword6124c04be7fd20421395a9b0dab3d314.definition = {
    methods: ["get","head"],
    url: '/nds/email/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314.url = (options?: RouteQueryOptions) => {
    return ResetPassword6124c04be7fd20421395a9b0dab3d314.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
const ResetPassword6124c04be7fd20421395a9b0dab3d314Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6124c04be7fd20421395a9b0dab3d314.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/email/password-reset/reset'
*/
ResetPassword6124c04be7fd20421395a9b0dab3d314Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6124c04be7fd20421395a9b0dab3d314.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword6124c04be7fd20421395a9b0dab3d314.form = ResetPassword6124c04be7fd20421395a9b0dab3d314Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
const ResetPasswordffad7df53d54e0786e5600f20deebbcb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

ResetPasswordffad7df53d54e0786e5600f20deebbcb.definition = {
    methods: ["get","head"],
    url: '/nds/files/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcb.url = (options?: RouteQueryOptions) => {
    return ResetPasswordffad7df53d54e0786e5600f20deebbcb.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
const ResetPasswordffad7df53d54e0786e5600f20deebbcbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/files/password-reset/reset'
*/
ResetPasswordffad7df53d54e0786e5600f20deebbcbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordffad7df53d54e0786e5600f20deebbcb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordffad7df53d54e0786e5600f20deebbcb.form = ResetPasswordffad7df53d54e0786e5600f20deebbcbForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
const ResetPassword6a9da8deec0604263ef565cbc5eb49cd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

ResetPassword6a9da8deec0604263ef565cbc5eb49cd.definition = {
    methods: ["get","head"],
    url: '/nds/notify/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url = (options?: RouteQueryOptions) => {
    return ResetPassword6a9da8deec0604263ef565cbc5eb49cd.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
const ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/notify/password-reset/reset'
*/
ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword6a9da8deec0604263ef565cbc5eb49cd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword6a9da8deec0604263ef565cbc5eb49cd.form = ResetPassword6a9da8deec0604263ef565cbc5eb49cdForm
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
const ResetPasswordcf521fc621685c836f501a4befdd5e86 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

ResetPasswordcf521fc621685c836f501a4befdd5e86.definition = {
    methods: ["get","head"],
    url: '/nds/queue/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86.url = (options?: RouteQueryOptions) => {
    return ResetPasswordcf521fc621685c836f501a4befdd5e86.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
const ResetPasswordcf521fc621685c836f501a4befdd5e86Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordcf521fc621685c836f501a4befdd5e86.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/queue/password-reset/reset'
*/
ResetPasswordcf521fc621685c836f501a4befdd5e86Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPasswordcf521fc621685c836f501a4befdd5e86.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPasswordcf521fc621685c836f501a4befdd5e86.form = ResetPasswordcf521fc621685c836f501a4befdd5e86Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
const ResetPassword01e2dc01003e5970db905fba3bcb4643 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

ResetPassword01e2dc01003e5970db905fba3bcb4643.definition = {
    methods: ["get","head"],
    url: '/nds/super/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.url = (options?: RouteQueryOptions) => {
    return ResetPassword01e2dc01003e5970db905fba3bcb4643.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
const ResetPassword01e2dc01003e5970db905fba3bcb4643Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/super/password-reset/reset'
*/
ResetPassword01e2dc01003e5970db905fba3bcb4643Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword01e2dc01003e5970db905fba3bcb4643.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword01e2dc01003e5970db905fba3bcb4643.form = ResetPassword01e2dc01003e5970db905fba3bcb4643Form
/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
const ResetPassword323b58fa16900ccee73e10f6caf172a1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

ResetPassword323b58fa16900ccee73e10f6caf172a1.definition = {
    methods: ["get","head"],
    url: '/nds/tools/password-reset/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.url = (options?: RouteQueryOptions) => {
    return ResetPassword323b58fa16900ccee73e10f6caf172a1.definition.url + queryParams(options)
}

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'head',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
const ResetPassword323b58fa16900ccee73e10f6caf172a1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url(options),
    method: 'get',
})

/**
* @see \Filament\Auth\Pages\PasswordReset\ResetPassword::__invoke
* @see vendor/filament/filament/src/Auth/Pages/PasswordReset/ResetPassword.php:7
* @route '/nds/tools/password-reset/reset'
*/
ResetPassword323b58fa16900ccee73e10f6caf172a1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ResetPassword323b58fa16900ccee73e10f6caf172a1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ResetPassword323b58fa16900ccee73e10f6caf172a1.form = ResetPassword323b58fa16900ccee73e10f6caf172a1Form

const ResetPassword = {
    '/admin/password-reset/reset': ResetPasswordd096dc006a997099292c2039656ab754,
    '/nds/app/password-reset/reset': ResetPassworde958504616843ced0a5bec0ef9eee292,
    '/nds/calendar/password-reset/reset': ResetPassword4f89c44c35a7c227994d42b0f3b12f3c,
    '/nds/chat/password-reset/reset': ResetPassword570063cd6633a1432398e8411983d0ed,
    '/nds/dev/password-reset/reset': ResetPasswordf19594ec2410f93dd79b5c8ca9330d53,
    '/nds/email/password-reset/reset': ResetPassword6124c04be7fd20421395a9b0dab3d314,
    '/nds/files/password-reset/reset': ResetPasswordffad7df53d54e0786e5600f20deebbcb,
    '/nds/notify/password-reset/reset': ResetPassword6a9da8deec0604263ef565cbc5eb49cd,
    '/nds/queue/password-reset/reset': ResetPasswordcf521fc621685c836f501a4befdd5e86,
    '/nds/super/password-reset/reset': ResetPassword01e2dc01003e5970db905fba3bcb4643,
    '/nds/tools/password-reset/reset': ResetPassword323b58fa16900ccee73e10f6caf172a1,
}

export default ResetPassword