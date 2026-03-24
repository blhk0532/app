import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
const TaskBoard = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TaskBoard.url(args, options),
    method: 'get',
})

TaskBoard.definition = {
    methods: ["get","head"],
    url: '/nds/app/team/{tenant}/task-board',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
TaskBoard.url = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions) => {
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

    return TaskBoard.definition.url
            .replace('{tenant}', parsedArgs.tenant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
TaskBoard.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TaskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
TaskBoard.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TaskBoard.url(args, options),
    method: 'head',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
const TaskBoardForm = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TaskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
TaskBoardForm.get = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TaskBoard.url(args, options),
    method: 'get',
})

/**
* @see \App\Filament\App\Pages\TaskBoard::__invoke
* @see app/Filament/App/Pages/TaskBoard.php:7
* @route '/nds/app/team/{tenant}/task-board'
*/
TaskBoardForm.head = (args: { tenant: string | number | { slug: string | number } } | [tenant: string | number | { slug: string | number } ] | string | number | { slug: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TaskBoard.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TaskBoard.form = TaskBoardForm

export default TaskBoard