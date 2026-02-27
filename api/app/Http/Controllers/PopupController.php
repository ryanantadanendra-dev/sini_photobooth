<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Popup;
use Illuminate\Support\Facades\Storage;

class PopupController extends Controller
{
    public function get() {
        $popup = Popup::where('id', 1)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $popup
        ], 201);
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,webp|max:2048'
        ]);

        if($request->hasFile('image')) {
            $path = $request->image->store('popup', 'public');

            Popup::create([
                'image' => $path
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Image Added Successfully!'
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something Went Wrong'
            ], 400);
        }
    }

    public function edit($id, Request $request) {
        $popup = Popup::findOrFail($id);
        
            $validatedData = [
                'image' => 'image|mimes:jpeg,jpg,png|max:2048'
            ];

            if ($popup->image && Storage::disk('public')->exists($popup->image)) {
                Storage::disk('public')->delete($popup->image);
            }


            $path = $request->image->store('popup', 'public');

            $popup->update([
                'image' => $path
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Image Updated Successfully!'
            ], 201);
    }
}
