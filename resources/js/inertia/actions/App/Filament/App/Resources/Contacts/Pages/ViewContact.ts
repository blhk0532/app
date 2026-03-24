import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
const ViewContact = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewContact.url(args, options),
    method: 'get',
})

ViewContact.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
            record: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
        record: args.record,
    }

    return ViewContact.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContact.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewContact.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
const ViewContactForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContactForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ViewContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ViewContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}'
*/
ViewContactForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewContact.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewContact.form = ViewContactForm

export default ViewContact