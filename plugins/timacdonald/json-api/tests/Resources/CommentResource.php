<?php

declare(strict_types=1);

namespace Tests\Resources;

use Tests\Models\BasicModel;
use TiMacDonald\JsonApi\JsonApiResource;

/**
 * @mixin BasicModel
 */
class CommentResource extends JsonApiResource
{
    public function toAttributes($request): array
    {
        return [
            'content' => $this->content,
        ];
    }

    public function toRelationships($request): array
    {
        return [
            'post' => fn () => PostResource::make($this->post),
            'likes' => fn () => BasicJsonApiResource::collection($this->likes),
        ];
    }
}
