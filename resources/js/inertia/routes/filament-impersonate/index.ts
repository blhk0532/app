import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
export const leave = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leave.url(options),
    method: 'get',
})

leave.definition = {
    methods: ["get","head"],
    url: '/filament-impersonate/leave',
} satisfies RouteDefinition<["get","head"]>

/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
leave.url = (options?: RouteQueryOptions) => {
    return leave.definition.url + queryParams(options)
}

/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
leave.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leave.url(options),
    method: 'get',
})

/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
leave.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: leave.url(options),
    method: 'head',
})

/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
const leaveForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: leave.url(options),
    method: 'get',
})

/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
leaveForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: leave.url(options),
    method: 'get',
})

/**
* @see vendor/stechstudio/filament-impersonate/routes/web.php:6
* @route '/filament-impersonate/leave'
*/
leaveForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: leave.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

leave.form = leaveForm

const filamentImpersonate = {
    leave: Object.assign(leave, leave),
}

export default filamentImpersonate