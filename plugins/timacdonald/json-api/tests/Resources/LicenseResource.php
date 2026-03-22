<?php

declare(strict_types=1);

namespace Tests\Resources;

use Tests\Models\BasicModel;
use TiMacDonald\JsonApi\JsonApiResource;

/**
 * @mixin BasicModel
 */
class LicenseResource extends JsonApiResource
{
    public function toAttributes($request): array
    {
        return [
            'key' => $this->key,
        ];
    }

    public function toRelationships($request): array
    {
        return [
            'user' => fn () => UserResource::make($this->user),
        ];
    }
}
