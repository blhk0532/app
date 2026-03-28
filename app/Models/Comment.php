<?php

declare(strict_types=1);

namespace App\Models;

use Relaticle\Comments\Models\Comment as BaseComment;

class Comment extends BaseComment
{
    protected $fillable = [
        'body',
        'parent_id',
        'commenter_id',
        'commenter_type',
        'author_id',
        'author_type',
        'edited_at',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (self $comment) {
            // Set author fields to match commenter for compatibility
            if (empty($comment->author_type)) {
                $comment->author_type = $comment->commenter_type;
            }
            if (empty($comment->author_id)) {
                $comment->author_id = $comment->commenter_id;
            }
        });
    }
}
