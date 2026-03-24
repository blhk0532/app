import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
const EditMerinfo = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMerinfo.url(args, options),
    method: 'get',
})

EditMerinfo.definition = {
    methods: ["get","head"],
    url: '/nds/data/merinfos/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
EditMerinfo.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditMerinfo.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
EditMerinfo.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditMerinfo.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
EditMerinfo.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditMerinfo.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
const EditMerinfoForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMerinfo.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
EditMerinfoForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMerinfo.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Data\Resources\Merinfos\Pages\EditMerinfo::__invoke
* @see app/Filament/Data/Resources/Merinfos/Pages/EditMerinfo.php:7
* @route '/nds/data/merinfos/{record}/edit'
*/
EditMerinfoForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditMerinfo.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditMerinfo.form = EditMerinfoForm

export default EditMerinfo