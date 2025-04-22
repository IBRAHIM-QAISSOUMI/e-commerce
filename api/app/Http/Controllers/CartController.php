<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{


public function addToCart(Request $request)
{
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'product_id' => 'required|exists:products,id',
        'quantity' => 'required|integer|min:1',
    ]);

    $existingCart = Cart::where('user_id', $request->user_id)
                        ->where('product_id', $request->product_id)
                        ->first();

    if ($existingCart) {
        $existingCart->quantity += $request->quantity;
        $existingCart->save();
    } else {
        Cart::create([
            'user_id' => $request->user_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
        ]);
    }

    return response()->json(['message' => 'product added in your cart']);
}

}
