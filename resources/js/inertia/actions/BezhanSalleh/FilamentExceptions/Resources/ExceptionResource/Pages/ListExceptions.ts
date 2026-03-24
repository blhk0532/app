import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
const ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url(options),
    method: 'get',
})

ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.definition = {
    methods: ["get","head"],
    url: '/nds/super/exceptions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url = (options?: RouteQueryOptions) => {
    return ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
const ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/super/exceptions'
*/
ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153.form = ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153Form
/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
const ListExceptionsde63233985ad33e62a9118f9261ae1f7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListExceptionsde63233985ad33e62a9118f9261ae1f7.url(options),
    method: 'get',
})

ListExceptionsde63233985ad33e62a9118f9261ae1f7.definition = {
    methods: ["get","head"],
    url: '/nds/tools/exceptions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
ListExceptionsde63233985ad33e62a9118f9261ae1f7.url = (options?: RouteQueryOptions) => {
    return ListExceptionsde63233985ad33e62a9118f9261ae1f7.definition.url + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
ListExceptionsde63233985ad33e62a9118f9261ae1f7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListExceptionsde63233985ad33e62a9118f9261ae1f7.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
ListExceptionsde63233985ad33e62a9118f9261ae1f7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListExceptionsde63233985ad33e62a9118f9261ae1f7.url(options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
const ListExceptionsde63233985ad33e62a9118f9261ae1f7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListExceptionsde63233985ad33e62a9118f9261ae1f7.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
ListExceptionsde63233985ad33e62a9118f9261ae1f7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListExceptionsde63233985ad33e62a9118f9261ae1f7.url(options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ListExceptions::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ListExceptions.php:7
* @route '/nds/tools/exceptions'
*/
ListExceptionsde63233985ad33e62a9118f9261ae1f7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListExceptionsde63233985ad33e62a9118f9261ae1f7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListExceptionsde63233985ad33e62a9118f9261ae1f7.form = ListExceptionsde63233985ad33e62a9118f9261ae1f7Form

const ListExceptions = {
    '/nds/super/exceptions': ListExceptionsc1ecf989dbcbc97c0ec4fb7f77160153,
    '/nds/tools/exceptions': ListExceptionsde63233985ad33e62a9118f9261ae1f7,
}

export default ListExceptions