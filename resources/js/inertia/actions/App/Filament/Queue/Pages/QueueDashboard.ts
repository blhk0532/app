import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
const QueueDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueDashboard.url(options),
    method: 'get',
})

QueueDashboard.definition = {
    methods: ["get","head"],
    url: '/nds/queue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
QueueDashboard.url = (options?: RouteQueryOptions) => {
    return QueueDashboard.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
QueueDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: QueueDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
QueueDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: QueueDashboard.url(options),
    method: 'head',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
const QueueDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
QueueDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueDashboard.url(options),
    method: 'get',
})

/**
* @see \App\Filament\Queue\Pages\QueueDashboard::__invoke
* @see app/Filament/Queue/Pages/QueueDashboard.php:7
* @route '/nds/queue'
*/
QueueDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: QueueDashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

QueueDashboard.form = QueueDashboardForm

export default QueueDashboard