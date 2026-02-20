<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $fillable = [  
        'name',
        'subname',
        'description',
        'image',
        'setupImages',
        'vidLink',
        'slug'
    ];

    protected $attributes = [
        'setupImages' => '[]',
    ];

    protected $casts = [
        'setupImages' => 'array',
    ];
}
