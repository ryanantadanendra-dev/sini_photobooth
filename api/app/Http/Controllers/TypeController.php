<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class TypeController extends Controller
{
    public function get() {
        $types = Type::all();

        return response()->json([
            'success' => true,
            'data' => $types
        ], 201);
    }

    public function store(Request $request) {
        $images = [];
        $path = null;

        $validatedData = $request->validate([
            'name' => 'required|max:50',
            'subname' => 'required|max:255',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,jpg,png|nullable',
            'setupImages' => ['nullable', 'array', 'min:1'],
            'setupImages.*' => 'image|mimes:jpeg,jpg,png|max:2048',
            'vidLink' => 'nullable|string',
        ]);

        if($request->hasFile('image')) {
            $path = $request->image->store('types', 'public');
        }
            
        if($request->hasFile('setupImages')) {
            foreach ($request->file('setupImages') as $file) {
                $setupImgPath = $file->store('types', 'public');
                $images[] = $setupImgPath;
            }
        }

        $slug = Str::slug($request->name);

        Type::create([
            'name' => $validatedData['name'],
            'subname' => $validatedData['subname'],
            'description' => $validatedData['description'],
            'image' => $path,
            'setupImages' => $images,
            'vidLink' => $validatedData['vidLink'],
            'slug' => $slug
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Type Added Successfully!'
        ], 201);
    }

    public function edit(Request $request, $slug) {
        $type = Type::where('slug', $slug);

        if($type) {
            $validatedData = $request->validate([
                'name' => 'required|max:50',
                'subname' => 'required|max:255',
                'description' => 'required',
                'vidLink' => 'nullable|string',
            ]);

            $slug = Str::slug($request->name);

            $type->update([
                'name' => $validatedData['name'],
                'subname' => $validatedData['subname'],
                'description' => $validatedData['description'],
                'vidLink' => $validatedData['vidLink'],
                'slug' => $slug
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Type Updated Successfully!'
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something Wrong Happenned'
            ], 400);
        }
    }

    public function editImage(Request $request, $slug) {
        $type = Type::where('slug', $slug)->firstOrFail();

        if($type) {
            Storage::disk('public')->delete($type->image);

            $validatedData = $request->validate([
                'image' => 'image|mimes:jpeg,jpg,png|max:2048'
            ]);

            if($request->hasFile('image')) {
                $path = $request->image->store('types', 'public');

                $type->update([
                    'image' => $path
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Image Updated Successfully'
                ], 201);

            }
                
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something Went Wrong'
            ], 400);
        }
    }

    public function deleteSetupImage($slug, $index) {
        $type = Type::where('slug', $slug)->firstOrFail();

        if($type) {
            $images = $type->setupImages;

            if(!isset($Images[$index])) {
                return response()->json([
                    'success' => false,
                    'message' => 'No Image Found!'
                ], 404);
            }
            
            Storage::disk('public')->delete($type->setupImages[$index]);
            unset($images[$index]);
            $images = array_values($images);

            $type->update([
                'setupImages' => $images
            ]);

            return response()->json([
                'success' => true,
                'message' => 'setup image deleted!'
            ], 201);
        }
    }

    public function destroy($slug) {
        $type = Type::where('slug', $slug)->firstOrFail();

        if($type) {
            if($type->image) {
                Storage::disk('public')->delete($type->image);
            }

            $type->delete();

            return response()->json([
                'success' => true,
                'message' => 'Type Deleted Successfully'
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Soething went wrong'
            ], 400);
        }
    }
}
