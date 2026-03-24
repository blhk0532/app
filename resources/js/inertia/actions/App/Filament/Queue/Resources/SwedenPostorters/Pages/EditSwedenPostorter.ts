import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
const EditSwedenPostorter = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSwedenPostorter.url(args, options),
    method: 'get',
})

EditSwedenPostorter.definition = {
    methods: ["get","head"],
    url: '/nds/queue/sweden-postorters/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
EditSwedenPostorter.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditSwedenPostorter.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
EditSwedenPostorter.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditSwedenPostorter.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
EditSwedenPostorter.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditSwedenPostorter.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
const EditSwedenPostorterForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenPostorter.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
EditSwedenPostorterForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenPostorter.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter::__invoke
* @see app/Filament/Queue/Resources/SwedenPostorters/Pages/EditSwedenPostorter.php:7
* @route '/nds/queue/sweden-postorters/{record}/edit'
*/
EditSwedenPostorterForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditSwedenPostorter.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditSwedenPostorter.form = EditSwedenPostorterForm

export default EditSwedenPostorter