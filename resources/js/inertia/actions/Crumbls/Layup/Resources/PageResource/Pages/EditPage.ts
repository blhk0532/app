import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
const EditPage = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPage.url(args, options),
    method: 'get',
})

EditPage.definition = {
    methods: ["get","head"],
    url: '/nds/dev/pages/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
EditPage.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPage.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
EditPage.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPage.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
EditPage.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPage.url(args, options),
    method: 'head',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
const EditPageForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPage.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
EditPageForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPage.url(args, options),
    method: 'get',
})

/**
* @see \Crumbls\Layup\Resources\PageResource\Pages\EditPage::__invoke
* @see plugins/crumbls/layup/src/Resources/PageResource/Pages/EditPage.php:7
* @route '/nds/dev/pages/{record}/edit'
*/
EditPageForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditPage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditPage.form = EditPageForm

export default EditPage