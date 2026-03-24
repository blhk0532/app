import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
const EditUserc3296486edd1683d8f361d504ea40dfa = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserc3296486edd1683d8f361d504ea40dfa.url(args, options),
    method: 'get',
})

EditUserc3296486edd1683d8f361d504ea40dfa.definition = {
    methods: ["get","head"],
    url: '/nds/booking/booking/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
EditUserc3296486edd1683d8f361d504ea40dfa.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUserc3296486edd1683d8f361d504ea40dfa.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
EditUserc3296486edd1683d8f361d504ea40dfa.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserc3296486edd1683d8f361d504ea40dfa.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
EditUserc3296486edd1683d8f361d504ea40dfa.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUserc3296486edd1683d8f361d504ea40dfa.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
const EditUserc3296486edd1683d8f361d504ea40dfaForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserc3296486edd1683d8f361d504ea40dfa.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
EditUserc3296486edd1683d8f361d504ea40dfaForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserc3296486edd1683d8f361d504ea40dfa.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/booking/booking/users/{record}/edit'
*/
EditUserc3296486edd1683d8f361d504ea40dfaForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserc3296486edd1683d8f361d504ea40dfa.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUserc3296486edd1683d8f361d504ea40dfa.form = EditUserc3296486edd1683d8f361d504ea40dfaForm
/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
const EditUserffeb8514e8268f209fd3c1d3bcba9f25 = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserffeb8514e8268f209fd3c1d3bcba9f25.url(args, options),
    method: 'get',
})

EditUserffeb8514e8268f209fd3c1d3bcba9f25.definition = {
    methods: ["get","head"],
    url: '/nds/super/booking/users/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
EditUserffeb8514e8268f209fd3c1d3bcba9f25.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditUserffeb8514e8268f209fd3c1d3bcba9f25.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
EditUserffeb8514e8268f209fd3c1d3bcba9f25.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditUserffeb8514e8268f209fd3c1d3bcba9f25.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
EditUserffeb8514e8268f209fd3c1d3bcba9f25.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditUserffeb8514e8268f209fd3c1d3bcba9f25.url(args, options),
    method: 'head',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
const EditUserffeb8514e8268f209fd3c1d3bcba9f25Form = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserffeb8514e8268f209fd3c1d3bcba9f25.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
EditUserffeb8514e8268f209fd3c1d3bcba9f25Form.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserffeb8514e8268f209fd3c1d3bcba9f25.url(args, options),
    method: 'get',
})

/**
* @see \Adultdate\FilamentBooking\Filament\Resources\Booking\Users\Pages\EditUser::__invoke
* @see plugins/adultdate/filament-booking/src/Filament/Resources/Booking/Users/Pages/EditUser.php:7
* @route '/nds/super/booking/users/{record}/edit'
*/
EditUserffeb8514e8268f209fd3c1d3bcba9f25Form.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: EditUserffeb8514e8268f209fd3c1d3bcba9f25.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

EditUserffeb8514e8268f209fd3c1d3bcba9f25.form = EditUserffeb8514e8268f209fd3c1d3bcba9f25Form

const EditUser = {
    '/nds/booking/booking/users/{record}/edit': EditUserc3296486edd1683d8f361d504ea40dfa,
    '/nds/super/booking/users/{record}/edit': EditUserffeb8514e8268f209fd3c1d3bcba9f25,
}

export default EditUser