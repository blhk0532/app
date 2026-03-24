import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
const CreateContact = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateContact.url(args, options),
    method: 'get',
})

CreateContact.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContact.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateContact.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContact.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContact.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateContact.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
const CreateContactForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\CreateContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/CreateContact.php:7
* @route '/nds/app/team/{tenant}/contacts/create'
*/
CreateContactForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateContact.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateContact.form = CreateContactForm

export default CreateContact