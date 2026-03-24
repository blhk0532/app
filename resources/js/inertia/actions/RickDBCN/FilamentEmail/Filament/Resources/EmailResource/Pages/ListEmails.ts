import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
const ListEmails = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEmails.url(options),
    method: 'get',
})

ListEmails.definition = {
    methods: ["get","head"],
    url: '/nds/email/emails',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
ListEmails.url = (options?: RouteQueryOptions) => {
    return ListEmails.definition.url + queryParams(options)
}

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
ListEmails.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListEmails.url(options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
ListEmails.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListEmails.url(options),
    method: 'head',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
const ListEmailsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmails.url(options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
ListEmailsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmails.url(options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
ListEmailsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListEmails.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListEmails.form = ListEmailsForm

export default ListEmails