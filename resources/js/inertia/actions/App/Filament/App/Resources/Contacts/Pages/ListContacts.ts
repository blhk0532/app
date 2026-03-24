import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
const ListContacts = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListContacts.url(args, options),
    method: 'get',
})

ListContacts.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContacts.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListContacts.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContacts.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListContacts.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContacts.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListContacts.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
const ListContactsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContacts.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContacts.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\ListContacts::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/ListContacts.php:7
* @route '/nds/app/team/{tenant}/contacts'
*/
ListContactsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListContacts.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListContacts.form = ListContactsForm

export default ListContacts