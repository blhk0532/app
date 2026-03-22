<?php

declare(strict_types=1);

namespace Tests\Resources;

use Tests\Models\BasicModel;
use TiMacDonald\JsonApi\JsonApiResource;

/**
 * @mixin BasicModel
 */
class UserResource extends JsonApiResource
{
    public function toAttributes($request)
    {
        return [
            'name' => $this->name,
        ];
    }

    public function toRelationships($request)
    {
        return [
            'posts' => fn () => PostResource::collection($this->posts),
            'license' => fn () => LicenseResource::make($this->license),
            'avatar' => fn () => ImageResource::make($this->avatar),
        ];
    }
}
