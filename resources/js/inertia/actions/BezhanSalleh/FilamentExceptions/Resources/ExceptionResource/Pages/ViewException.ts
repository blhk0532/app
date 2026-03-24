import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
const ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url(args, options),
    method: 'get',
})

ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.definition = {
    methods: ["get","head"],
    url: '/nds/super/exceptions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
const ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/super/exceptions/{record}'
*/
ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456.form = ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456Form
/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
const ViewException55ad944e1326b200549c06eaf008935f = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewException55ad944e1326b200549c06eaf008935f.url(args, options),
    method: 'get',
})

ViewException55ad944e1326b200549c06eaf008935f.definition = {
    methods: ["get","head"],
    url: '/nds/tools/exceptions/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
ViewException55ad944e1326b200549c06eaf008935f.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewException55ad944e1326b200549c06eaf008935f.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
ViewException55ad944e1326b200549c06eaf008935f.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewException55ad944e1326b200549c06eaf008935f.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
ViewException55ad944e1326b200549c06eaf008935f.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewException55ad944e1326b200549c06eaf008935f.url(args, options),
    method: 'head',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
const ViewException55ad944e1326b200549c06eaf008935fForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewException55ad944e1326b200549c06eaf008935f.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
ViewException55ad944e1326b200549c06eaf008935fForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewException55ad944e1326b200549c06eaf008935f.url(args, options),
    method: 'get',
})

/**
* @see \BezhanSalleh\FilamentExceptions\Resources\ExceptionResource\Pages\ViewException::__invoke
* @see plugins/bezhansalleh/filament-exceptions/src/Resources/ExceptionResource/Pages/ViewException.php:7
* @route '/nds/tools/exceptions/{record}'
*/
ViewException55ad944e1326b200549c06eaf008935fForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ViewException55ad944e1326b200549c06eaf008935f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ViewException55ad944e1326b200549c06eaf008935f.form = ViewException55ad944e1326b200549c06eaf008935fForm

const ViewException = {
    '/nds/super/exceptions/{record}': ViewExceptionb0aa6fa2d2ffd0371ab37f5e1a475456,
    '/nds/tools/exceptions/{record}': ViewException55ad944e1326b200549c06eaf008935f,
}

export default ViewException