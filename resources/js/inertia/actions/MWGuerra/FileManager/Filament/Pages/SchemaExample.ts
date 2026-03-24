import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
const SchemaExample = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchemaExample.url(options),
    method: 'get',
})

SchemaExample.definition = {
    methods: ["get","head"],
    url: '/nds/files/schema-example',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExample.url = (options?: RouteQueryOptions) => {
    return SchemaExample.definition.url + queryParams(options)
}

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExample.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SchemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExample.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SchemaExample.url(options),
    method: 'head',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
const SchemaExampleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExampleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExample.url(options),
    method: 'get',
})

/**
* @see \MWGuerra\FileManager\Filament\Pages\SchemaExample::__invoke
* @see plugins/mwguerra/filemanager/src/Filament/Pages/SchemaExample.php:7
* @route '/nds/files/schema-example'
*/
SchemaExampleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SchemaExample.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SchemaExample.form = SchemaExampleForm

export default SchemaExample