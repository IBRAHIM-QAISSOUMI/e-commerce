<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'category',
        'subCategory',
        'price',
        'sizes',
        'bestSeller',
        'image1',
        'image2',
        'image3',
        'image4',
    ];
    

    public function users() 
    {
        return $this->belongsToMany(User::class);
    }

    public function cartItems()
    {
        return $this->hasMany(Cart::class);
    }

}
