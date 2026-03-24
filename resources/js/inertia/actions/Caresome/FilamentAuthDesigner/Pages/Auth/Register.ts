import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
const Register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Register.url(options),
    method: 'get',
})

Register.definition = {
    methods: ["get","head"],
    url: '/admin/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
Register.url = (options?: RouteQueryOptions) => {
    return Register.definition.url + queryParams(options)
}

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
Register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Register.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
Register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Register.url(options),
    method: 'head',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
const RegisterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Register.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
RegisterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Register.url(options),
    method: 'get',
})

/**
* @see \Caresome\FilamentAuthDesigner\Pages\Auth\Register::__invoke
* @see plugins/caresome/filament-auth-designer/src/Pages/Auth/Register.php:7
* @route '/admin/register'
*/
RegisterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Register.form = RegisterForm

export default Register