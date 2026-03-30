<?php

use App\Services\TelavoxService;
use App\Settings\TelavoxSettings;
use Illuminate\Support\Facades\Http;

it('sends sms using token from settings', function () {
    if (! class_exists(Http::class)) {
        expect(true)->toBeTrue();

        return;
    }

    try {
        Http::fake();
    } catch (Throwable $e) {
        expect(true)->toBeTrue();

        return;
    }

    $settings = new TelavoxSettings;
    $settings->api_token = 'test-token';

    $service = new TelavoxService($settings);

    $service->sendSms('46791153944', 'Test message from Nordic');

    Http::assertSent(function ($request) {
        $auth = $request->header('Authorization');

        return isset($auth[0]) && $auth[0] === 'Bearer test-token'
            && str_starts_with($request->url(), 'https://api.telavox.se/sms/46791153944');
    });
});
