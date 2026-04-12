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
        $path = null;

        $validatedData = $request->validate([
            'name' => 'required|max:50',
            'subname' => 'required|max:255',
            'description' => 'required',
            'image' => 'image|mimes:jpeg,jpg,png|nullable',
            'setupImage' => 'image|mimes:jpeg,jpg,png|nullable',
            'vidLink' => 'nullable|string',
        ]);

        if($request->hasFile('image')) {
            $path = $request->image->store('types', 'public');
        }
            
        if($request->hasFile('setupImage')) {
            $setupImgPath = $request->setupImage->store('types', 'public');
        }

        $slug = Str::slug($request->name);

        Type::create([
            'name' => $validatedData['name'],
            'subname' => $validatedData['subname'],
            'description' => $validatedData['description'],
            'image' => $path,
            'setupImage' => $setupImgPath,
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

            
            if($request->hasFile('image')) {
                $validatedData = $request->validate([
                    'image' => 'image|mimes:jpeg,jpg,png|max:2048'
                ]);
                $path = $request->image->store('types', 'public');

                $type->update([
                    'image' => $path
                ]);

                
            } else if($request->hasFile('setupImage')) {
                $validatedData = $request->validate([
                    'setupImage' => 'image|mimes:jpeg,jpg,png|max:2048'
                ]);
                $path = $request->setupImage->store('types', 'public');

                $type->update([
                    'setupImage' => $path
                ]);
            }
                
            return response()->json([
                'success' => true,
                'message' => 'Image Updated Successfully'
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something Went Wrong'
            ], 400);
        }
    }

    public function editSetupImage(Request $request, $slug) {
        $type = Type::where('slug', $slug)->firstOrFail();

        if($type) {
            Storage::disk('public')->delete($type->setupImage);

            $validatedData = $request->validate([
                'setupImage' => 'image|mimes:jpeg,jpg,png|max:2048'
            ]);

            if($request->hasFile('setupImage')) {
                $path = $request->setupImage->store('types', 'public');

                $type->update([
                    'setupImage' => $path
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
