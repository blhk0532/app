<?php

declare(strict_types=1);

namespace Spatie\LaravelData\Contracts;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

interface ResponsableData extends Responsable
{
    public static function allowedRequestIncludes(): ?array;

    public static function allowedRequestExcludes(): ?array;

    public static function allowedRequestOnly(): ?array;

    public static function allowedRequestExcept(): ?array;

    /**
     * @param  Request  $request
     * @return Response
     */
    public function toResponse($request);
}
