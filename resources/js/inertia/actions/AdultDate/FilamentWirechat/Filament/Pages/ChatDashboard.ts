import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
const ChatDashboard99a3652b5c14c506eb5c1284f789ec00 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url(args, options),
    method: 'get',
})

ChatDashboard99a3652b5c14c506eb5c1284f789ec00.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return ChatDashboard99a3652b5c14c506eb5c1284f789ec00.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
ChatDashboard99a3652b5c14c506eb5c1284f789ec00.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
ChatDashboard99a3652b5c14c506eb5c1284f789ec00.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
const ChatDashboard99a3652b5c14c506eb5c1284f789ec00Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
ChatDashboard99a3652b5c14c506eb5c1284f789ec00Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/admin/{tenant}/wirechat'
*/
ChatDashboard99a3652b5c14c506eb5c1284f789ec00Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard99a3652b5c14c506eb5c1284f789ec00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatDashboard99a3652b5c14c506eb5c1284f789ec00.form = ChatDashboard99a3652b5c14c506eb5c1284f789ec00Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
const ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604 = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url(args, options),
    method: 'get',
})

ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url(args, options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
const ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604Form = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604Form.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url(args, options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/app/team/{tenant}/wirechat'
*/
ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604Form.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604.form = ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
const ChatDashboard53108fcbd521519e14c4bb5f1f847019 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard53108fcbd521519e14c4bb5f1f847019.url(options),
    method: 'get',
})

ChatDashboard53108fcbd521519e14c4bb5f1f847019.definition = {
    methods: ["get","head"],
    url: '/nds/notify/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
ChatDashboard53108fcbd521519e14c4bb5f1f847019.url = (options?: RouteQueryOptions) => {
    return ChatDashboard53108fcbd521519e14c4bb5f1f847019.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
ChatDashboard53108fcbd521519e14c4bb5f1f847019.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard53108fcbd521519e14c4bb5f1f847019.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
ChatDashboard53108fcbd521519e14c4bb5f1f847019.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatDashboard53108fcbd521519e14c4bb5f1f847019.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
const ChatDashboard53108fcbd521519e14c4bb5f1f847019Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard53108fcbd521519e14c4bb5f1f847019.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
ChatDashboard53108fcbd521519e14c4bb5f1f847019Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard53108fcbd521519e14c4bb5f1f847019.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/notify/wirechat'
*/
ChatDashboard53108fcbd521519e14c4bb5f1f847019Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard53108fcbd521519e14c4bb5f1f847019.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatDashboard53108fcbd521519e14c4bb5f1f847019.form = ChatDashboard53108fcbd521519e14c4bb5f1f847019Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
const ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url(options),
    method: 'get',
})

ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.definition = {
    methods: ["get","head"],
    url: '/nds/super/wirechat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url = (options?: RouteQueryOptions) => {
    return ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
const ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Pages\ChatDashboard::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Pages/ChatDashboard.php:7
* @route '/nds/super/wirechat'
*/
ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e.form = ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1eForm

const ChatDashboard = {
    '/admin/{tenant}/wirechat': ChatDashboard99a3652b5c14c506eb5c1284f789ec00,
    '/nds/app/team/{tenant}/wirechat': ChatDashboard127e8d4f61f8ee02324d7c8d66b0b604,
    '/nds/notify/wirechat': ChatDashboard53108fcbd521519e14c4bb5f1f847019,
    '/nds/super/wirechat': ChatDashboard5ecfcd8781dd4f8e646edb4039b41f1e,
}

export default ChatDashboard