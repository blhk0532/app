import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
const NotifierDashboarda2c96c0f859e160d289980a99706d207 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotifierDashboarda2c96c0f859e160d289980a99706d207.url(options),
    method: 'get',
})

NotifierDashboarda2c96c0f859e160d289980a99706d207.definition = {
    methods: ["get","head"],
    url: '/nds/notify/notifier-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
NotifierDashboarda2c96c0f859e160d289980a99706d207.url = (options?: RouteQueryOptions) => {
    return NotifierDashboarda2c96c0f859e160d289980a99706d207.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
NotifierDashboarda2c96c0f859e160d289980a99706d207.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotifierDashboarda2c96c0f859e160d289980a99706d207.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
NotifierDashboarda2c96c0f859e160d289980a99706d207.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotifierDashboarda2c96c0f859e160d289980a99706d207.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
const NotifierDashboarda2c96c0f859e160d289980a99706d207Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifierDashboarda2c96c0f859e160d289980a99706d207.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
NotifierDashboarda2c96c0f859e160d289980a99706d207Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifierDashboarda2c96c0f859e160d289980a99706d207.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/notify/notifier-dashboard'
*/
NotifierDashboarda2c96c0f859e160d289980a99706d207Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifierDashboarda2c96c0f859e160d289980a99706d207.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotifierDashboarda2c96c0f859e160d289980a99706d207.form = NotifierDashboarda2c96c0f859e160d289980a99706d207Form
/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
const NotifierDashboard51f14d0a2070420fcfe60bed996fbc98 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url(options),
    method: 'get',
})

NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.definition = {
    methods: ["get","head"],
    url: '/nds/super/notifier-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url = (options?: RouteQueryOptions) => {
    return NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.definition.url + queryParams(options)
}

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url(options),
    method: 'head',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
const NotifierDashboard51f14d0a2070420fcfe60bed996fbc98Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
NotifierDashboard51f14d0a2070420fcfe60bed996fbc98Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url(options),
    method: 'get',
})

/**
* @see \Usamamuneerchaudhary\Notifier\Filament\Pages\NotifierDashboard::__invoke
* @see vendor/usamamuneerchaudhary/filament-notifier/src/Filament/Pages/NotifierDashboard.php:7
* @route '/nds/super/notifier-dashboard'
*/
NotifierDashboard51f14d0a2070420fcfe60bed996fbc98Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

NotifierDashboard51f14d0a2070420fcfe60bed996fbc98.form = NotifierDashboard51f14d0a2070420fcfe60bed996fbc98Form

const NotifierDashboard = {
    '/nds/notify/notifier-dashboard': NotifierDashboarda2c96c0f859e160d289980a99706d207,
    '/nds/super/notifier-dashboard': NotifierDashboard51f14d0a2070420fcfe60bed996fbc98,
}

export default NotifierDashboard