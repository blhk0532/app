import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
const ListCampaigns = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns.url(args, options),
    method: 'get',
})

ListCampaigns.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/campaigns',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaigns.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return ListCampaigns.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaigns.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCampaigns.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaigns.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCampaigns.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
const ListCampaignsForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaigns.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaigns.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\ListCampaigns::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/ListCampaigns.php:7
* @route '/nds/app/team/{tenant}/campaigns'
*/
ListCampaignsForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListCampaigns.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListCampaigns.form = ListCampaignsForm

export default ListCampaigns