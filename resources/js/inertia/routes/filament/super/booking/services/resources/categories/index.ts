import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\ListCategories::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/ListCategories.php:7
* @route '/nds/super/booking/services/categories'
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
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services/categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/super/booking/services/categories/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/services/categories/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Categories\Pages\EditCategory::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Clusters/Services/Resources/Categories/Pages/EditCategory.php:7
* @route '/nds/super/booking/services/categories/{record}/edit'
*/
editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const categories = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    edit: Object.assign(edit, edit),
}

export default categories