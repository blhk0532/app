import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
const RedirectToTenantController35f58437d9250c39f332f5e8e70440b7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url = (options?: RouteQueryOptions) => {
    return RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
const RedirectToTenantController35f58437d9250c39f332f5e8e70440b7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
RedirectToTenantController35f58437d9250c39f332f5e8e70440b7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/admin'
*/
RedirectToTenantController35f58437d9250c39f332f5e8e70440b7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToTenantController35f58437d9250c39f332f5e8e70440b7.form = RedirectToTenantController35f58437d9250c39f332f5e8e70440b7Form
/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
const RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url(options),
    method: 'get',
})

RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.definition = {
    methods: ["get","head"],
    url: '/nds/app',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url = (options?: RouteQueryOptions) => {
    return RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.definition.url + queryParams(options)
}

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url(options),
    method: 'head',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
const RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2eaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2eaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url(options),
    method: 'get',
})

/**
* @see \Filament\Http\Controllers\RedirectToTenantController::__invoke
* @see vendor/filament/filament/src/Http/Controllers/RedirectToTenantController.php:11
* @route '/nds/app'
*/
RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2eaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea.form = RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2eaForm

const RedirectToTenantController = {
    '/admin': RedirectToTenantController35f58437d9250c39f332f5e8e70440b7,
    '/nds/app': RedirectToTenantController3988cdfc5faa098f4b48217d4b8bc2ea,
}

export default RedirectToTenantController