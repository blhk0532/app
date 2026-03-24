import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/email/emails',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ListEmails::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ListEmails.php:7
* @route '/nds/email/emails'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/email/emails/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: args.record,
    }

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

view.form = viewForm

const emails = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default emails