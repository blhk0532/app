import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
const SendTestMessage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendTestMessage.url(args, options),
    method: 'get',
})

SendTestMessage.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/send-test-message',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
SendTestMessage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return SendTestMessage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
SendTestMessage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SendTestMessage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
SendTestMessage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SendTestMessage.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
const SendTestMessageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendTestMessage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
SendTestMessageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendTestMessage.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\SendTestMessage::__invoke
* @see app/Filament/App/Pages/SendTestMessage.php:7
* @route '/nds/app/team/{tenant}/send-test-message'
*/
SendTestMessageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SendTestMessage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SendTestMessage.form = SendTestMessageForm

export default SendTestMessage