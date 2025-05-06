<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'size' => 'required|string',
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
                'size' => $request->size,
            ]);
        }

        return response()->json(['message' => 'Product added to your cart']);
    }


    public function GetCart(Request $request)
    {
        $user = Auth::user();

        $cartItems = Cart::with('product')
            ->where('user_id', $user->id)
            ->get();

        return response()->json([
            'cart' => $cartItems
        ]);
    }

    public function deleteToCart(string $id) {
        $cart = Cart::findOrFail($id);
        $cart->delete();
        return response()->json(['message'=> 'product deleted']);
    }
}

