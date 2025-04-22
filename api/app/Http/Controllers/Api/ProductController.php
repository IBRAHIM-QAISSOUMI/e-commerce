<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::All();
        return response()->json($products, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'subCategory' => 'required|string',
            'price' => 'required|numeric',
            'sizes' => 'required|string',
            'bestseller' => 'required|boolean',
            'image1' => 'nullable|image|max:10240',
            'image2' => 'nullable|image|max:10240',
            'image3' => 'nullable|image|max:10240',
            'image4' => 'nullable|image|max:10240',
        ]);
    
        $sizes = json_encode($validated['sizes']);
    
        $imagePaths = [];
        for ($i = 1; $i <= 4; $i++) {
            if ($request->hasFile("image{$i}")) {
                $imagePaths[$i] = $request->file("image{$i}")->store('products', 'public');
            }
        }
    
        $product = Product::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'category' => $validated['category'],
            'subCategory' => $validated['subCategory'],
            'price' => $validated['price'],
            'sizes' => $sizes, 
            'bestseller' => $validated['bestseller'],
            'image1' => $imagePaths[1] ?? null,
            'image2' => $imagePaths[2] ?? null,
            'image3' => $imagePaths[3] ?? null,
            'image4' => $imagePaths[4] ?? null,
        ]);
    
        return response()->json($product, 201);
    }
    


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
