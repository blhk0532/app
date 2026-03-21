<?php

declare(strict_types=1);

namespace App\Http\Responses;

use App\Support\Filament\AppPanelRedirect;
use Filament\Auth\Http\Responses\Contracts\LoginResponse as FilamentLoginResponseContract;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

final class CustomLoginResponse implements FilamentLoginResponseContract, LoginResponseContract
{
    public function toResponse($request)
    {
        return $request->wantsJson()
            ? new JsonResponse('', 204)
            : redirect()->to(AppPanelRedirect::urlFor($request->user()));
    }
}
