import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
const ViewController0d958d3c255923e9dcb1e53539810c55 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewController0d958d3c255923e9dcb1e53539810c55.url(options),
    method: 'get',
})

ViewController0d958d3c255923e9dcb1e53539810c55.definition = {
    methods: ["get","head"],
    url: '/chats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
ViewController0d958d3c255923e9dcb1e53539810c55.url = (options?: RouteQueryOptions) => {
    return ViewController0d958d3c255923e9dcb1e53539810c55.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
ViewController0d958d3c255923e9dcb1e53539810c55.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewController0d958d3c255923e9dcb1e53539810c55.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
ViewController0d958d3c255923e9dcb1e53539810c55.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewController0d958d3c255923e9dcb1e53539810c55.url(options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
const ViewController0d958d3c255923e9dcb1e53539810c55Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewController0d958d3c255923e9dcb1e53539810c55.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
ViewController0d958d3c255923e9dcb1e53539810c55Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewController0d958d3c255923e9dcb1e53539810c55.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats'
*/
ViewController0d958d3c255923e9dcb1e53539810c55Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewController0d958d3c255923e9dcb1e53539810c55.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewController0d958d3c255923e9dcb1e53539810c55.form = ViewController0d958d3c255923e9dcb1e53539810c55Form
/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
const ViewControllere3edcbca657cb71ec8ce2b565efb3a79 = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url(args, options),
    method: 'get',
})

ViewControllere3edcbca657cb71ec8ce2b565efb3a79.definition = {
    methods: ["get","head"],
    url: '/chats/{conversation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { conversation: args }
    }

    if (Array.isArray(args)) {
        args = {
            conversation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        conversation: args.conversation,
    }

    return ViewControllere3edcbca657cb71ec8ce2b565efb3a79.definition.url
            .replace('{conversation}', parsedArgs.conversation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
ViewControllere3edcbca657cb71ec8ce2b565efb3a79.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
ViewControllere3edcbca657cb71ec8ce2b565efb3a79.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url(args, options),
    method: 'head',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
const ViewControllere3edcbca657cb71ec8ce2b565efb3a79Form = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
ViewControllere3edcbca657cb71ec8ce2b565efb3a79Form.get = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url(args, options),
    method: 'get',
})

/**
* @see \Illuminate\Routing\ViewController::__invoke
* @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
* @route '/chats/{conversation}'
*/
ViewControllere3edcbca657cb71ec8ce2b565efb3a79Form.head = (args: { conversation: string | number } | [conversation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewControllere3edcbca657cb71ec8ce2b565efb3a79.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewControllere3edcbca657cb71ec8ce2b565efb3a79.form = ViewControllere3edcbca657cb71ec8ce2b565efb3a79Form

const ViewController = {
    '/chats': ViewController0d958d3c255923e9dcb1e53539810c55,
    '/chats/{conversation}': ViewControllere3edcbca657cb71ec8ce2b565efb3a79,
}

export default ViewController