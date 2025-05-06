<?php
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Api\OrderController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// auth routing
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

// route for ProductController
Route::resource('products', ProductController::class);


// route for add product in table carts 
Route::post('/cart/add', [CartController::class, 'addToCart']);

Route::middleware('auth:sanctum')->get('/cart', [CartController::class, 'GetCart']);
Route::middleware('auth:sanctum')->post('/cart/delete/{id}', [CartController::class, 'deleteToCart']);

Route::middleware('auth:sanctum')->apiResource('orders', OrderController::class)->only(['index', 'store']);

