import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
const FileManagerPage = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManagerPage.url(args, options),
    method: 'get',
})

FileManagerPage.definition = {
    methods: ["get","head"],
    url: '/admin/{tenant}/file-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
FileManagerPage.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tenant: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { tenant: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            tenant: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tenant: typeof args.tenant === 'object'
        ? args.tenant.slug
        : args.tenant,
    }

    return FileManagerPage.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
FileManagerPage.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FileManagerPage.url(args, options),
    method: 'get',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
FileManagerPage.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FileManagerPage.url(args, options),
    method: 'head',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
const FileManagerPageForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerPage.url(args, options),
    method: 'get',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
FileManagerPageForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerPage.url(args, options),
    method: 'get',
})

/**
* @see \MmesDesign\FilamentFileManager\Filament\Pages\FileManagerPage::__invoke
* @see vendor/mmes-design/filament-file-manager/src/Filament/Pages/FileManagerPage.php:7
* @route '/admin/{tenant}/file-manager'
*/
FileManagerPageForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FileManagerPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FileManagerPage.form = FileManagerPageForm

export default FileManagerPage