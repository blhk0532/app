import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
const CreateCampaign = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign.url(args, options),
    method: 'get',
})

CreateCampaign.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/campaigns/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaign.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return CreateCampaign.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaign.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCampaign.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaign.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCampaign.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
const CreateCampaignForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaign.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaign.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\CreateCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/CreateCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/create'
*/
CreateCampaignForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCampaign.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCampaign.form = CreateCampaignForm

export default CreateCampaign