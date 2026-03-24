import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
export const getMerinfo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfo.url(options),
    method: 'get',
})

getMerinfo.definition = {
    methods: ["get","head"],
    url: '/api/job-queue/get-merinfo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
getMerinfo.url = (options?: RouteQueryOptions) => {
    return getMerinfo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
getMerinfo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfo.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
getMerinfo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMerinfo.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
const getMerinfoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfo.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
getMerinfoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfo.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:24
* @route '/api/job-queue/get-merinfo'
*/
getMerinfoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfo.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getMerinfo.form = getMerinfoForm

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
export const getMerinfoPostnummer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoPostnummer.url(options),
    method: 'get',
})

getMerinfoPostnummer.definition = {
    methods: ["get","head"],
    url: '/api/job-queue/get-merinfo-postnummer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
getMerinfoPostnummer.url = (options?: RouteQueryOptions) => {
    return getMerinfoPostnummer.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
getMerinfoPostnummer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoPostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
getMerinfoPostnummer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMerinfoPostnummer.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
const getMerinfoPostnummerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoPostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
getMerinfoPostnummerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoPostnummer.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:223
* @route '/api/job-queue/get-merinfo-postnummer'
*/
getMerinfoPostnummerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoPostnummer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getMerinfoPostnummer.form = getMerinfoPostnummerForm

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/put-merinfo'
*/
const putMerinfo69f757296e1ebe138895d2af8e58533f = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putMerinfo69f757296e1ebe138895d2af8e58533f.url(options),
    method: 'put',
})

putMerinfo69f757296e1ebe138895d2af8e58533f.definition = {
    methods: ["put"],
    url: '/api/job-queue/put-merinfo',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/put-merinfo'
*/
putMerinfo69f757296e1ebe138895d2af8e58533f.url = (options?: RouteQueryOptions) => {
    return putMerinfo69f757296e1ebe138895d2af8e58533f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/put-merinfo'
*/
putMerinfo69f757296e1ebe138895d2af8e58533f.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putMerinfo69f757296e1ebe138895d2af8e58533f.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/put-merinfo'
*/
const putMerinfo69f757296e1ebe138895d2af8e58533fForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfo69f757296e1ebe138895d2af8e58533f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/put-merinfo'
*/
putMerinfo69f757296e1ebe138895d2af8e58533fForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfo69f757296e1ebe138895d2af8e58533f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

putMerinfo69f757296e1ebe138895d2af8e58533f.form = putMerinfo69f757296e1ebe138895d2af8e58533fForm
/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/post-merinfo'
*/
const putMerinfo1deb1c26cfeb735010c3c8b2f676d821 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: putMerinfo1deb1c26cfeb735010c3c8b2f676d821.url(options),
    method: 'post',
})

putMerinfo1deb1c26cfeb735010c3c8b2f676d821.definition = {
    methods: ["post"],
    url: '/api/job-queue/post-merinfo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/post-merinfo'
*/
putMerinfo1deb1c26cfeb735010c3c8b2f676d821.url = (options?: RouteQueryOptions) => {
    return putMerinfo1deb1c26cfeb735010c3c8b2f676d821.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/post-merinfo'
*/
putMerinfo1deb1c26cfeb735010c3c8b2f676d821.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: putMerinfo1deb1c26cfeb735010c3c8b2f676d821.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/post-merinfo'
*/
const putMerinfo1deb1c26cfeb735010c3c8b2f676d821Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfo1deb1c26cfeb735010c3c8b2f676d821.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfo
* @see app/Http/Controllers/Api/JobQueueController.php:323
* @route '/api/job-queue/post-merinfo'
*/
putMerinfo1deb1c26cfeb735010c3c8b2f676d821Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfo1deb1c26cfeb735010c3c8b2f676d821.url(options),
    method: 'post',
})

putMerinfo1deb1c26cfeb735010c3c8b2f676d821.form = putMerinfo1deb1c26cfeb735010c3c8b2f676d821Form

export const putMerinfo = {
    '/api/job-queue/put-merinfo': putMerinfo69f757296e1ebe138895d2af8e58533f,
    '/api/job-queue/post-merinfo': putMerinfo1deb1c26cfeb735010c3c8b2f676d821,
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
const deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'delete',
})

deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.definition = {
    methods: ["delete"],
    url: '/api/job-queue/delete-merinfo-postnummer',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url = (options?: RouteQueryOptions) => {
    return deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
const deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.form = deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm
/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
const deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'get',
})

deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.definition = {
    methods: ["get","head"],
    url: '/api/job-queue/delete-merinfo-postnummer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url = (options?: RouteQueryOptions) => {
    return deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
const deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/job-queue/delete-merinfo-postnummer'
*/
deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db.form = deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52dbForm
/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
const deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url(options),
    method: 'get',
})

deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.definition = {
    methods: ["get","head"],
    url: '/api/delete-queue/get-merinfo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url = (options?: RouteQueryOptions) => {
    return deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
const deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::deleteMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:397
* @route '/api/delete-queue/get-merinfo'
*/
deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a.form = deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103aForm

export const deleteMerinfoPostnummer = {
    '/api/job-queue/delete-merinfo-postnummer': deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db,
    '/api/job-queue/delete-merinfo-postnummer': deleteMerinfoPostnummer7552152a46bc8b2c93832819edce52db,
    '/api/delete-queue/get-merinfo': deleteMerinfoPostnummeref76951c2569f6ef436739b2692b103a,
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/put-merinfo-postnummer'
*/
const putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.url(options),
    method: 'put',
})

putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.definition = {
    methods: ["put"],
    url: '/api/job-queue/put-merinfo-postnummer',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/put-merinfo-postnummer'
*/
putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.url = (options?: RouteQueryOptions) => {
    return putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/put-merinfo-postnummer'
*/
putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/put-merinfo-postnummer'
*/
const putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57feForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/put-merinfo-postnummer'
*/
putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57feForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe.form = putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57feForm
/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/post-merinfo-postnummer'
*/
const putMerinfoPostnummer403b92839827e9775eb78173800095da = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: putMerinfoPostnummer403b92839827e9775eb78173800095da.url(options),
    method: 'post',
})

putMerinfoPostnummer403b92839827e9775eb78173800095da.definition = {
    methods: ["post"],
    url: '/api/job-queue/post-merinfo-postnummer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/post-merinfo-postnummer'
*/
putMerinfoPostnummer403b92839827e9775eb78173800095da.url = (options?: RouteQueryOptions) => {
    return putMerinfoPostnummer403b92839827e9775eb78173800095da.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/post-merinfo-postnummer'
*/
putMerinfoPostnummer403b92839827e9775eb78173800095da.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: putMerinfoPostnummer403b92839827e9775eb78173800095da.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/post-merinfo-postnummer'
*/
const putMerinfoPostnummer403b92839827e9775eb78173800095daForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfoPostnummer403b92839827e9775eb78173800095da.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoPostnummer
* @see app/Http/Controllers/Api/JobQueueController.php:432
* @route '/api/job-queue/post-merinfo-postnummer'
*/
putMerinfoPostnummer403b92839827e9775eb78173800095daForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfoPostnummer403b92839827e9775eb78173800095da.url(options),
    method: 'post',
})

putMerinfoPostnummer403b92839827e9775eb78173800095da.form = putMerinfoPostnummer403b92839827e9775eb78173800095daForm

export const putMerinfoPostnummer = {
    '/api/job-queue/put-merinfo-postnummer': putMerinfoPostnummer5cdc7d6c6cab90895d6d221a860d57fe,
    '/api/job-queue/post-merinfo-postnummer': putMerinfoPostnummer403b92839827e9775eb78173800095da,
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
const getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url(options),
    method: 'get',
})

getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.definition = {
    methods: ["get","head"],
    url: '/api/job-queue/get-merinfo-count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url = (options?: RouteQueryOptions) => {
    return getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
const getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/get-merinfo-count'
*/
getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f.form = getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963fForm
/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/post-merinfo-count'
*/
const getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.url(options),
    method: 'post',
})

getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.definition = {
    methods: ["post"],
    url: '/api/job-queue/post-merinfo-count',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/post-merinfo-count'
*/
getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.url = (options?: RouteQueryOptions) => {
    return getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/post-merinfo-count'
*/
getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/post-merinfo-count'
*/
const getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getMerinfoPostnummerCount
* @see app/Http/Controllers/Api/JobQueueController.php:282
* @route '/api/job-queue/post-merinfo-count'
*/
getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.url(options),
    method: 'post',
})

getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a.form = getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33aForm

export const getMerinfoPostnummerCount = {
    '/api/job-queue/get-merinfo-count': getMerinfoPostnummerCount4f4fc3241721b31597d3356f6880963f,
    '/api/job-queue/post-merinfo-count': getMerinfoPostnummerCount505fe93c3d5e3a6231f449418ac7d33a,
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoCount
* @see app/Http/Controllers/Api/JobQueueController.php:113
* @route '/api/job-queue/put-merinfo-count'
*/
export const putMerinfoCount = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putMerinfoCount.url(options),
    method: 'put',
})

putMerinfoCount.definition = {
    methods: ["put"],
    url: '/api/job-queue/put-merinfo-count',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoCount
* @see app/Http/Controllers/Api/JobQueueController.php:113
* @route '/api/job-queue/put-merinfo-count'
*/
putMerinfoCount.url = (options?: RouteQueryOptions) => {
    return putMerinfoCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoCount
* @see app/Http/Controllers/Api/JobQueueController.php:113
* @route '/api/job-queue/put-merinfo-count'
*/
putMerinfoCount.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putMerinfoCount.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoCount
* @see app/Http/Controllers/Api/JobQueueController.php:113
* @route '/api/job-queue/put-merinfo-count'
*/
const putMerinfoCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfoCount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putMerinfoCount
* @see app/Http/Controllers/Api/JobQueueController.php:113
* @route '/api/job-queue/put-merinfo-count'
*/
putMerinfoCountForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putMerinfoCount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

putMerinfoCount.form = putMerinfoCountForm

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
export const getRatsit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRatsit.url(options),
    method: 'get',
})

getRatsit.definition = {
    methods: ["get","head"],
    url: '/api/job-queue/get-ratsit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
getRatsit.url = (options?: RouteQueryOptions) => {
    return getRatsit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
getRatsit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRatsit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
getRatsit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRatsit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
const getRatsitForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRatsit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
getRatsitForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRatsit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:71
* @route '/api/job-queue/get-ratsit'
*/
getRatsitForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRatsit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getRatsit.form = getRatsitForm

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit'
*/
const putRatsit0cb327933ad26bd53726dafa9e63b210 = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putRatsit0cb327933ad26bd53726dafa9e63b210.url(options),
    method: 'put',
})

putRatsit0cb327933ad26bd53726dafa9e63b210.definition = {
    methods: ["put"],
    url: '/api/job-queue/put-ratsit',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit'
*/
putRatsit0cb327933ad26bd53726dafa9e63b210.url = (options?: RouteQueryOptions) => {
    return putRatsit0cb327933ad26bd53726dafa9e63b210.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit'
*/
putRatsit0cb327933ad26bd53726dafa9e63b210.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putRatsit0cb327933ad26bd53726dafa9e63b210.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit'
*/
const putRatsit0cb327933ad26bd53726dafa9e63b210Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putRatsit0cb327933ad26bd53726dafa9e63b210.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit'
*/
putRatsit0cb327933ad26bd53726dafa9e63b210Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putRatsit0cb327933ad26bd53726dafa9e63b210.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

putRatsit0cb327933ad26bd53726dafa9e63b210.form = putRatsit0cb327933ad26bd53726dafa9e63b210Form
/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/post-ratsit'
*/
const putRatsit5663457de63bf016163c6dfcf973fc5d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: putRatsit5663457de63bf016163c6dfcf973fc5d.url(options),
    method: 'post',
})

putRatsit5663457de63bf016163c6dfcf973fc5d.definition = {
    methods: ["post"],
    url: '/api/job-queue/post-ratsit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/post-ratsit'
*/
putRatsit5663457de63bf016163c6dfcf973fc5d.url = (options?: RouteQueryOptions) => {
    return putRatsit5663457de63bf016163c6dfcf973fc5d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/post-ratsit'
*/
putRatsit5663457de63bf016163c6dfcf973fc5d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: putRatsit5663457de63bf016163c6dfcf973fc5d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/post-ratsit'
*/
const putRatsit5663457de63bf016163c6dfcf973fc5dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putRatsit5663457de63bf016163c6dfcf973fc5d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsit
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/post-ratsit'
*/
putRatsit5663457de63bf016163c6dfcf973fc5dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putRatsit5663457de63bf016163c6dfcf973fc5d.url(options),
    method: 'post',
})

putRatsit5663457de63bf016163c6dfcf973fc5d.form = putRatsit5663457de63bf016163c6dfcf973fc5dForm

export const putRatsit = {
    '/api/job-queue/put-ratsit': putRatsit0cb327933ad26bd53726dafa9e63b210,
    '/api/job-queue/post-ratsit': putRatsit5663457de63bf016163c6dfcf973fc5d,
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
export const getRatsitCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRatsitCount.url(options),
    method: 'get',
})

getRatsitCount.definition = {
    methods: ["get","head"],
    url: '/api/job-queue/get-ratsit-count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
getRatsitCount.url = (options?: RouteQueryOptions) => {
    return getRatsitCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
getRatsitCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRatsitCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
getRatsitCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRatsitCount.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
const getRatsitCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRatsitCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
getRatsitCountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRatsitCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::getRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/get-ratsit-count'
*/
getRatsitCountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getRatsitCount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getRatsitCount.form = getRatsitCountForm

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit-count'
*/
export const putRatsitCount = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putRatsitCount.url(options),
    method: 'put',
})

putRatsitCount.definition = {
    methods: ["put"],
    url: '/api/job-queue/put-ratsit-count',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit-count'
*/
putRatsitCount.url = (options?: RouteQueryOptions) => {
    return putRatsitCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit-count'
*/
putRatsitCount.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: putRatsitCount.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit-count'
*/
const putRatsitCountForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putRatsitCount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\JobQueueController::putRatsitCount
* @see app/Http/Controllers/Api/JobQueueController.php:0
* @route '/api/job-queue/put-ratsit-count'
*/
putRatsitCountForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: putRatsitCount.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

putRatsitCount.form = putRatsitCountForm

const JobQueueController = { getMerinfo, getMerinfoPostnummer, putMerinfo, deleteMerinfoPostnummer, putMerinfoPostnummer, getMerinfoPostnummerCount, putMerinfoCount, getRatsit, putRatsit, getRatsitCount, putRatsitCount }

export default JobQueueController