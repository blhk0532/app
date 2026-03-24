import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
const EditCampaign = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign.url(args, options),
    method: 'get',
})

EditCampaign.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/campaigns/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign.url = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions) => {
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

    return EditCampaign.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCampaign.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaign.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCampaign.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
const EditCampaignForm = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaignForm.get = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Resources\Campaigns\Pages\EditCampaign::__invoke
* @see app/Filament/App/Resources/Campaigns/Pages/EditCampaign.php:7
* @route '/nds/app/team/{tenant}/campaigns/{record}/edit'
*/
EditCampaignForm.head = (args: { tenant: string | number | { slug: string | number }, record: string | number } | [tenant: string | number | { slug: string | number }, record: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditCampaign.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditCampaign.form = EditCampaignForm

export default EditCampaign