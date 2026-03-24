import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
const ListMessages48d99a1a2b093fc1c3d87f78bece4171 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMessages48d99a1a2b093fc1c3d87f78bece4171.url(options),
    method: 'get',
})

ListMessages48d99a1a2b093fc1c3d87f78bece4171.definition = {
    methods: ["get","head"],
    url: '/nds/notify/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
ListMessages48d99a1a2b093fc1c3d87f78bece4171.url = (options?: RouteQueryOptions) => {
    return ListMessages48d99a1a2b093fc1c3d87f78bece4171.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
ListMessages48d99a1a2b093fc1c3d87f78bece4171.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMessages48d99a1a2b093fc1c3d87f78bece4171.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
ListMessages48d99a1a2b093fc1c3d87f78bece4171.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMessages48d99a1a2b093fc1c3d87f78bece4171.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
const ListMessages48d99a1a2b093fc1c3d87f78bece4171Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMessages48d99a1a2b093fc1c3d87f78bece4171.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
ListMessages48d99a1a2b093fc1c3d87f78bece4171Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMessages48d99a1a2b093fc1c3d87f78bece4171.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/notify/messages'
*/
ListMessages48d99a1a2b093fc1c3d87f78bece4171Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMessages48d99a1a2b093fc1c3d87f78bece4171.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMessages48d99a1a2b093fc1c3d87f78bece4171.form = ListMessages48d99a1a2b093fc1c3d87f78bece4171Form
/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
const ListMessages91efe9917681c99f1aa0b4a514bccb72 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMessages91efe9917681c99f1aa0b4a514bccb72.url(options),
    method: 'get',
})

ListMessages91efe9917681c99f1aa0b4a514bccb72.definition = {
    methods: ["get","head"],
    url: '/nds/super/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
ListMessages91efe9917681c99f1aa0b4a514bccb72.url = (options?: RouteQueryOptions) => {
    return ListMessages91efe9917681c99f1aa0b4a514bccb72.definition.url + queryParams(options)
}

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
ListMessages91efe9917681c99f1aa0b4a514bccb72.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMessages91efe9917681c99f1aa0b4a514bccb72.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
ListMessages91efe9917681c99f1aa0b4a514bccb72.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMessages91efe9917681c99f1aa0b4a514bccb72.url(options),
    method: 'head',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
const ListMessages91efe9917681c99f1aa0b4a514bccb72Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMessages91efe9917681c99f1aa0b4a514bccb72.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
ListMessages91efe9917681c99f1aa0b4a514bccb72Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMessages91efe9917681c99f1aa0b4a514bccb72.url(options),
    method: 'get',
})

/**
* @see \AdultDate\FilamentWirechat\Filament\Resources\Messages\Pages\ListMessages::__invoke
* @see plugins/adultdate/filament-wirechat/src/Filament/Resources/Messages/Pages/ListMessages.php:7
* @route '/nds/super/messages'
*/
ListMessages91efe9917681c99f1aa0b4a514bccb72Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ListMessages91efe9917681c99f1aa0b4a514bccb72.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ListMessages91efe9917681c99f1aa0b4a514bccb72.form = ListMessages91efe9917681c99f1aa0b4a514bccb72Form

const ListMessages = {
    '/nds/notify/messages': ListMessages48d99a1a2b093fc1c3d87f78bece4171,
    '/nds/super/messages': ListMessages91efe9917681c99f1aa0b4a514bccb72,
}

export default ListMessages