import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
const FilamentGoogleMapAssets = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FilamentGoogleMapAssets.url(args, options),
    method: 'get',
})

FilamentGoogleMapAssets.definition = {
    methods: ["get","head"],
    url: '/cheesegrits/filament-google-maps/{file}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
FilamentGoogleMapAssets.url = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { file: args }
    }

    if (Array.isArray(args)) {
        args = {
            file: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        file: args.file,
    }

    return FilamentGoogleMapAssets.definition.url
            .replace('{file}', parsedArgs.file.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
FilamentGoogleMapAssets.get = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: FilamentGoogleMapAssets.url(args, options),
    method: 'get',
})

/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
FilamentGoogleMapAssets.head = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: FilamentGoogleMapAssets.url(args, options),
    method: 'head',
})

/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
const FilamentGoogleMapAssetsForm = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FilamentGoogleMapAssets.url(args, options),
    method: 'get',
})

/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
FilamentGoogleMapAssetsForm.get = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FilamentGoogleMapAssets.url(args, options),
    method: 'get',
})

/**
* @see \Cheesegrits\FilamentGoogleMaps\Controllers\FilamentGoogleMapAssets::__invoke
* @see vendor/cheesegrits/filament-google-maps/src/Controllers/FilamentGoogleMapAssets.php:10
* @route '/cheesegrits/filament-google-maps/{file}'
*/
FilamentGoogleMapAssetsForm.head = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: FilamentGoogleMapAssets.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

FilamentGoogleMapAssets.form = FilamentGoogleMapAssetsForm

export default FilamentGoogleMapAssets