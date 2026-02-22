<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function get() {
        $portfolios = Portfolio::all();

        return response()->json([
            'success' => true,
            'data' => $portfolios
        ], 201);
    }

    public function store(Request $request) {
        $validateImage = $request->validate([
            'images'   => ['required', 'array', 'min:1'],
            'images.*' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);
    
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $path = $file->store('portfolios', 'public');
    
                Portfolio::create([
                    'image' => $path,
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something Went wrong!',
            ], 400);
        }
    
        return response()->json([
            'success' => true,
            'message' => 'Image(s) Added successfully',
        ], 201);
    }

    public function destroy($id) {
        $portfolio = Portfolio::findOrFail($id);

        if($portfolio) {
            Storage::disk('public')->delete($portfolio->image);

            $portfolio->delete();

            return response()->json([
                'success' => true,
                'message' => 'Image Deleted Successfully'
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data Not Found!'
            ], 404);
        }
    }
}
