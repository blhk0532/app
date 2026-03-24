import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
export const conversion = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conversion.url(args, options),
    method: 'get',
})

conversion.definition = {
    methods: ["get","head"],
    url: '/storage/product-images/{mediaId}/conversions/{conversionName}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
conversion.url = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            mediaId: args[0],
            conversionName: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaId: args.mediaId,
        conversionName: args.conversionName,
    }

    return conversion.definition.url
            .replace('{mediaId}', parsedArgs.mediaId.toString())
            .replace('{conversionName}', parsedArgs.conversionName.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
conversion.get = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conversion.url(args, options),
    method: 'get',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
conversion.head = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conversion.url(args, options),
    method: 'head',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
const conversionForm = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conversion.url(args, options),
    method: 'get',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
conversionForm.get = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conversion.url(args, options),
    method: 'get',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:424
* @route '/storage/product-images/{mediaId}/conversions/{conversionName}'
*/
conversionForm.head = (args: { mediaId: string | number, conversionName: string | number } | [mediaId: string | number, conversionName: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conversion.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

conversion.form = conversionForm

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
export const file = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: file.url(args, options),
    method: 'get',
})

file.definition = {
    methods: ["get","head"],
    url: '/storage/product-images/{mediaId}/{filename}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
file.url = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            mediaId: args[0],
            filename: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        mediaId: args.mediaId,
        filename: args.filename,
    }

    return file.definition.url
            .replace('{mediaId}', parsedArgs.mediaId.toString())
            .replace('{filename}', parsedArgs.filename.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
file.get = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: file.url(args, options),
    method: 'get',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
file.head = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: file.url(args, options),
    method: 'head',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
const fileForm = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: file.url(args, options),
    method: 'get',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
fileForm.get = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: file.url(args, options),
    method: 'get',
})

/**
* @see plugins/adultdate/filament-booking/src/FilamentBookingServiceProvider.php:434
* @route '/storage/product-images/{mediaId}/{filename}'
*/
fileForm.head = (args: { mediaId: string | number, filename: string | number } | [mediaId: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: file.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

file.form = fileForm

const media = {
    conversion: Object.assign(conversion, conversion),
    file: Object.assign(file, file),
}

export default media