import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
const RegisterTeam = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegisterTeam.url(options),
    method: 'get',
})

RegisterTeam.definition = {
    methods: ["get","head"],
    url: '/nds/app/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
RegisterTeam.url = (options?: RouteQueryOptions) => {
    return RegisterTeam.definition.url + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
RegisterTeam.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegisterTeam.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
RegisterTeam.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RegisterTeam.url(options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
const RegisterTeamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegisterTeam.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
RegisterTeamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegisterTeam.url(options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\Tenancy\RegisterTeam::__invoke
* @see app/Filament/App/Pages/Tenancy/RegisterTeam.php:7
* @route '/nds/app/new'
*/
RegisterTeamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RegisterTeam.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RegisterTeam.form = RegisterTeamForm

export default RegisterTeam