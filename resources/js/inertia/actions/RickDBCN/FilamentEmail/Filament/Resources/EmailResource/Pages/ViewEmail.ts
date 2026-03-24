import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
const ViewEmail = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEmail.url(args, options),
    method: 'get',
})

ViewEmail.definition = {
    methods: ["get","head"],
    url: '/nds/email/emails/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
ViewEmail.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewEmail.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
ViewEmail.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewEmail.url(args, options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
ViewEmail.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewEmail.url(args, options),
    method: 'head',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
const ViewEmailForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmail.url(args, options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
ViewEmailForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmail.url(args, options),
    method: 'get',
})

/**
* @see \RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail::__invoke
* @see vendor/rickdbcn/filament-email/src/Filament/Resources/EmailResource/Pages/ViewEmail.php:7
* @route '/nds/email/emails/{record}'
*/
ViewEmailForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewEmail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewEmail.form = ViewEmailForm

export default ViewEmail