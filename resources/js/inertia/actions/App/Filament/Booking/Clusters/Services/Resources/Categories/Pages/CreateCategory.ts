import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../../wayfinder'
/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
const CreateCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCategory.url(options),
    method: 'get',
})

CreateCategory.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/services/categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
CreateCategory.url = (options?: RouteQueryOptions) => {
    return CreateCategory.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
CreateCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
CreateCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCategory.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
const CreateCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
CreateCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCategory.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Booking\Clusters\Services\Resources\Categories\Pages\CreateCategory::__invoke
* @see app/Filament/Booking/Clusters/Services/Resources/Categories/Pages/CreateCategory.php:7
* @route '/nds/booking/booking/services/categories/create'
*/
CreateCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CreateCategory.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CreateCategory.form = CreateCategoryForm

export default CreateCategory