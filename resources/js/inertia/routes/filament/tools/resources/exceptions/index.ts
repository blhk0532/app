import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/tools/exceptions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
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
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/nds/tools/exceptions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
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
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: view.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
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

const exceptions = {
    index: Object.assign(index, index),
    view: Object.assign(view, view),
}

export default exceptions