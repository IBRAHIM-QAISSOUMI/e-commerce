<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Product extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'description',
        'price',
        'image',
        'category',
        'subCategory',
        'sizes',
        'date',
        'bestseller',
    ];

    public function users() 
    {
        return $this->belongsToMany(User::class);
    }
}
