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
        'setupImage',
        'vidLink',
        'slug'
    ];
}
