<?php

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

it('sends sms via controller when token is present', function () {
    $user = User::factory()->create();

    // ensure settings table exists and insert telavox token
    DB::table('settings')->updateOrInsert(
        ['group' => 'telavox', 'name' => 'api_token'],
        ['payload' => json_encode('test-token'), 'created_at' => now(), 'updated_at' => now()]
    );

    Http::fake([
        'https://api.telavox.se/*' => Http::response(['message' => 'OK'], 200),
    ]);

    $response = $this->actingAs($user)->post(route('filament.admin.outgoing-sms.send'), [
        'number' => '0046792029414',
        'message' => 'testing testing',
    ]);

    $response->assertRedirect();
    $response->assertSessionHas('status', 'Meddelande skickat');

    Http::assertSent(function ($request) {
        return str_contains($request->url(), 'api.telavox.se');
    });
});
