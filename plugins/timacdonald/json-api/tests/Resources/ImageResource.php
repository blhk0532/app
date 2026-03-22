<?php

declare(strict_types=1);

namespace Tests\Resources;

use Tests\Models\BasicModel;
use TiMacDonald\JsonApi\JsonApiResource;

/**
 * @mixin BasicModel
 */
class ImageResource extends JsonApiResource
{
    public function toAttributes($request): array
    {
        return [
            'url' => $this->url,
        ];
    }
}
