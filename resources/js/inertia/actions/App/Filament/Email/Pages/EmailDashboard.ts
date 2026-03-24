import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
const EmailDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailDashboard.url(options),
    method: 'get',
})

EmailDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
EmailDashboard.url = (options?: RouteQueryOptions) => {
    return EmailDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
EmailDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EmailDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
EmailDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EmailDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
const EmailDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
EmailDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Email\Pages\EmailDashboard::__invoke
* @see app/Filament/Email/Pages/EmailDashboard.php:7
* @route '/nds/email'
*/
EmailDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EmailDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EmailDashboard.form = EmailDashboardForm

export default EmailDashboard