import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
const Login047f8ce2fdeb7128b2677a1dd45b96b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'get',
})

Login047f8ce2fdeb7128b2677a1dd45b96b8.definition = {
    methods: ["get","head"],
    url: '/admin/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
Login047f8ce2fdeb7128b2677a1dd45b96b8.url = (options?: RouteQueryOptions) => {
    return Login047f8ce2fdeb7128b2677a1dd45b96b8.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
Login047f8ce2fdeb7128b2677a1dd45b96b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
Login047f8ce2fdeb7128b2677a1dd45b96b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
const Login047f8ce2fdeb7128b2677a1dd45b96b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
Login047f8ce2fdeb7128b2677a1dd45b96b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login047f8ce2fdeb7128b2677a1dd45b96b8.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/admin/login'
*/
Login047f8ce2fdeb7128b2677a1dd45b96b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login047f8ce2fdeb7128b2677a1dd45b96b8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login047f8ce2fdeb7128b2677a1dd45b96b8.form = Login047f8ce2fdeb7128b2677a1dd45b96b8Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
const Login3628b7c7cab1f5480a3d1a395a43a118 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

Login3628b7c7cab1f5480a3d1a395a43a118.definition = {
    methods: ["get","head"],
    url: '/nds/app/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118.url = (options?: RouteQueryOptions) => {
    return Login3628b7c7cab1f5480a3d1a395a43a118.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
const Login3628b7c7cab1f5480a3d1a395a43a118Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3628b7c7cab1f5480a3d1a395a43a118.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/app/login'
*/
Login3628b7c7cab1f5480a3d1a395a43a118Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login3628b7c7cab1f5480a3d1a395a43a118.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login3628b7c7cab1f5480a3d1a395a43a118.form = Login3628b7c7cab1f5480a3d1a395a43a118Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
const Logine3d7702d5c92df86176fa7c716eaede9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

Logine3d7702d5c92df86176fa7c716eaede9.definition = {
    methods: ["get","head"],
    url: '/nds/booking/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9.url = (options?: RouteQueryOptions) => {
    return Logine3d7702d5c92df86176fa7c716eaede9.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
const Logine3d7702d5c92df86176fa7c716eaede9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine3d7702d5c92df86176fa7c716eaede9.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/booking/login'
*/
Logine3d7702d5c92df86176fa7c716eaede9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine3d7702d5c92df86176fa7c716eaede9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logine3d7702d5c92df86176fa7c716eaede9.form = Logine3d7702d5c92df86176fa7c716eaede9Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
const Login2ab0ebebc9cd021cbf24c68c1b4259ad = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

Login2ab0ebebc9cd021cbf24c68c1b4259ad.definition = {
    methods: ["get","head"],
    url: '/nds/calendar/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259ad.url = (options?: RouteQueryOptions) => {
    return Login2ab0ebebc9cd021cbf24c68c1b4259ad.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259ad.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259ad.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
const Login2ab0ebebc9cd021cbf24c68c1b4259adForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259adForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/calendar/login'
*/
Login2ab0ebebc9cd021cbf24c68c1b4259adForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login2ab0ebebc9cd021cbf24c68c1b4259ad.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login2ab0ebebc9cd021cbf24c68c1b4259ad.form = Login2ab0ebebc9cd021cbf24c68c1b4259adForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
const Logind5d11fdcc7fb4be97549d651efa630b6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

Logind5d11fdcc7fb4be97549d651efa630b6.definition = {
    methods: ["get","head"],
    url: '/nds/chat/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6.url = (options?: RouteQueryOptions) => {
    return Logind5d11fdcc7fb4be97549d651efa630b6.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
const Logind5d11fdcc7fb4be97549d651efa630b6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logind5d11fdcc7fb4be97549d651efa630b6.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/chat/login'
*/
Logind5d11fdcc7fb4be97549d651efa630b6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logind5d11fdcc7fb4be97549d651efa630b6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logind5d11fdcc7fb4be97549d651efa630b6.form = Logind5d11fdcc7fb4be97549d651efa630b6Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
const Login407c09843fbe2eb8b5ad8f4dee555c64 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

Login407c09843fbe2eb8b5ad8f4dee555c64.definition = {
    methods: ["get","head"],
    url: '/nds/dev/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64.url = (options?: RouteQueryOptions) => {
    return Login407c09843fbe2eb8b5ad8f4dee555c64.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
const Login407c09843fbe2eb8b5ad8f4dee555c64Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login407c09843fbe2eb8b5ad8f4dee555c64.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/dev/login'
*/
Login407c09843fbe2eb8b5ad8f4dee555c64Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login407c09843fbe2eb8b5ad8f4dee555c64.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login407c09843fbe2eb8b5ad8f4dee555c64.form = Login407c09843fbe2eb8b5ad8f4dee555c64Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
const Loginaa235dba092b3c842df89bcd1401f1b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

Loginaa235dba092b3c842df89bcd1401f1b7.definition = {
    methods: ["get","head"],
    url: '/nds/email/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7.url = (options?: RouteQueryOptions) => {
    return Loginaa235dba092b3c842df89bcd1401f1b7.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
const Loginaa235dba092b3c842df89bcd1401f1b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginaa235dba092b3c842df89bcd1401f1b7.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/email/login'
*/
Loginaa235dba092b3c842df89bcd1401f1b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Loginaa235dba092b3c842df89bcd1401f1b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Loginaa235dba092b3c842df89bcd1401f1b7.form = Loginaa235dba092b3c842df89bcd1401f1b7Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
const Login89c01f6e90696715780cbf74fe3ddebe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

Login89c01f6e90696715780cbf74fe3ddebe.definition = {
    methods: ["get","head"],
    url: '/nds/files/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebe.url = (options?: RouteQueryOptions) => {
    return Login89c01f6e90696715780cbf74fe3ddebe.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
const Login89c01f6e90696715780cbf74fe3ddebeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login89c01f6e90696715780cbf74fe3ddebe.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/files/login'
*/
Login89c01f6e90696715780cbf74fe3ddebeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login89c01f6e90696715780cbf74fe3ddebe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login89c01f6e90696715780cbf74fe3ddebe.form = Login89c01f6e90696715780cbf74fe3ddebeForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
const Logincef8af70fbb617f49064eae4ba18b592 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

Logincef8af70fbb617f49064eae4ba18b592.definition = {
    methods: ["get","head"],
    url: '/nds/notify/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592.url = (options?: RouteQueryOptions) => {
    return Logincef8af70fbb617f49064eae4ba18b592.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
const Logincef8af70fbb617f49064eae4ba18b592Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincef8af70fbb617f49064eae4ba18b592.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/notify/login'
*/
Logincef8af70fbb617f49064eae4ba18b592Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logincef8af70fbb617f49064eae4ba18b592.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logincef8af70fbb617f49064eae4ba18b592.form = Logincef8af70fbb617f49064eae4ba18b592Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
const Login8c281e0f558569877a70e1beb5823d0a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

Login8c281e0f558569877a70e1beb5823d0a.definition = {
    methods: ["get","head"],
    url: '/nds/queue/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0a.url = (options?: RouteQueryOptions) => {
    return Login8c281e0f558569877a70e1beb5823d0a.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
const Login8c281e0f558569877a70e1beb5823d0aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login8c281e0f558569877a70e1beb5823d0a.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/queue/login'
*/
Login8c281e0f558569877a70e1beb5823d0aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login8c281e0f558569877a70e1beb5823d0a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login8c281e0f558569877a70e1beb5823d0a.form = Login8c281e0f558569877a70e1beb5823d0aForm
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
const Logine984e9f0c831b3e9b0cdf1ba2d7d3a65 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.definition = {
    methods: ["get","head"],
    url: '/nds/super/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url = (options?: RouteQueryOptions) => {
    return Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
const Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/super/login'
*/
Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Logine984e9f0c831b3e9b0cdf1ba2d7d3a65.form = Logine984e9f0c831b3e9b0cdf1ba2d7d3a65Form
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
const Login63a3562f0c6506fb1dbb47d26a527007 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

Login63a3562f0c6506fb1dbb47d26a527007.definition = {
    methods: ["get","head"],
    url: '/nds/tools/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007.url = (options?: RouteQueryOptions) => {
    return Login63a3562f0c6506fb1dbb47d26a527007.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
const Login63a3562f0c6506fb1dbb47d26a527007Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login63a3562f0c6506fb1dbb47d26a527007.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Login::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Login.php:7
* @route '/nds/tools/login'
*/
Login63a3562f0c6506fb1dbb47d26a527007Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Login63a3562f0c6506fb1dbb47d26a527007.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Login63a3562f0c6506fb1dbb47d26a527007.form = Login63a3562f0c6506fb1dbb47d26a527007Form

const Login = {
    '/admin/login': Login047f8ce2fdeb7128b2677a1dd45b96b8,
    '/nds/app/login': Login3628b7c7cab1f5480a3d1a395a43a118,
    '/nds/booking/login': Logine3d7702d5c92df86176fa7c716eaede9,
    '/nds/calendar/login': Login2ab0ebebc9cd021cbf24c68c1b4259ad,
    '/nds/chat/login': Logind5d11fdcc7fb4be97549d651efa630b6,
    '/nds/dev/login': Login407c09843fbe2eb8b5ad8f4dee555c64,
    '/nds/email/login': Loginaa235dba092b3c842df89bcd1401f1b7,
    '/nds/files/login': Login89c01f6e90696715780cbf74fe3ddebe,
    '/nds/notify/login': Logincef8af70fbb617f49064eae4ba18b592,
    '/nds/queue/login': Login8c281e0f558569877a70e1beb5823d0a,
    '/nds/super/login': Logine984e9f0c831b3e9b0cdf1ba2d7d3a65,
    '/nds/tools/login': Login63a3562f0c6506fb1dbb47d26a527007,
}

export default Login