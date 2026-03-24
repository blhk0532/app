import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
const Backups5028a27be5b511fabd21441a9e553efa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Backups5028a27be5b511fabd21441a9e553efa.url(options),
    method: 'get',
})

Backups5028a27be5b511fabd21441a9e553efa.definition = {
    methods: ["get","head"],
    url: '/nds/super/backups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
Backups5028a27be5b511fabd21441a9e553efa.url = (options?: RouteQueryOptions) => {
    return Backups5028a27be5b511fabd21441a9e553efa.definition.url + queryParams(options)
}

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
Backups5028a27be5b511fabd21441a9e553efa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Backups5028a27be5b511fabd21441a9e553efa.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
Backups5028a27be5b511fabd21441a9e553efa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Backups5028a27be5b511fabd21441a9e553efa.url(options),
    method: 'head',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
const Backups5028a27be5b511fabd21441a9e553efaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Backups5028a27be5b511fabd21441a9e553efa.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
Backups5028a27be5b511fabd21441a9e553efaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Backups5028a27be5b511fabd21441a9e553efa.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/super/backups'
*/
Backups5028a27be5b511fabd21441a9e553efaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Backups5028a27be5b511fabd21441a9e553efa.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Backups5028a27be5b511fabd21441a9e553efa.form = Backups5028a27be5b511fabd21441a9e553efaForm
/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
const Backups60fcb2fcb80f3c62e9fe0562f58a8274 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Backups60fcb2fcb80f3c62e9fe0562f58a8274.url(options),
    method: 'get',
})

Backups60fcb2fcb80f3c62e9fe0562f58a8274.definition = {
    methods: ["get","head"],
    url: '/nds/tools/backups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
Backups60fcb2fcb80f3c62e9fe0562f58a8274.url = (options?: RouteQueryOptions) => {
    return Backups60fcb2fcb80f3c62e9fe0562f58a8274.definition.url + queryParams(options)
}

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
Backups60fcb2fcb80f3c62e9fe0562f58a8274.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Backups60fcb2fcb80f3c62e9fe0562f58a8274.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
Backups60fcb2fcb80f3c62e9fe0562f58a8274.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Backups60fcb2fcb80f3c62e9fe0562f58a8274.url(options),
    method: 'head',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
const Backups60fcb2fcb80f3c62e9fe0562f58a8274Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Backups60fcb2fcb80f3c62e9fe0562f58a8274.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
Backups60fcb2fcb80f3c62e9fe0562f58a8274Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Backups60fcb2fcb80f3c62e9fe0562f58a8274.url(options),
    method: 'get',
})

/**
* @see \ShuvroRoy\FilamentSpatieLaravelBackup\Pages\Backups::__invoke
* @see vendor/shuvroroy/filament-spatie-laravel-backup/src/Pages/Backups.php:7
* @route '/nds/tools/backups'
*/
Backups60fcb2fcb80f3c62e9fe0562f58a8274Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Backups60fcb2fcb80f3c62e9fe0562f58a8274.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Backups60fcb2fcb80f3c62e9fe0562f58a8274.form = Backups60fcb2fcb80f3c62e9fe0562f58a8274Form

const Backups = {
    '/nds/super/backups': Backups5028a27be5b511fabd21441a9e553efa,
    '/nds/tools/backups': Backups60fcb2fcb80f3c62e9fe0562f58a8274,
}

export default Backups