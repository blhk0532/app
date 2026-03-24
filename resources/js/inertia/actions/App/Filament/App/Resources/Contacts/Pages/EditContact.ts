import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
const EditContact = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditContact.url(args, options),
    method: 'get',
})

EditContact.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/contacts/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContact.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditContact.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContact.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContact.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditContact.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
const EditContactForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContact.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Contacts\Pages\EditContact::__invoke
* @see app/Filament/App/Resources/Contacts/Pages/EditContact.php:7
* @route '/nds/app/team/{tenant}/contacts/{record}/edit'
*/
EditContactForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditContact.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditContact.form = EditContactForm

export default EditContact