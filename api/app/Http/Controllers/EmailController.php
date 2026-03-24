<?php

namespace App\Http\Controllers;

use App\Mail\TestEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'email'    => 'required|string|max:100',
            'event' => 'required|string|max:255',
            'type'  => 'required|string|max:255',
        ]);

        // Send to your business email
        Mail::to('d.developer13th@gmail.com')->send(new TestEmail(
            $validated['name'],
            $validated['email'],
            $validated['event'],
            $validated['type'],
        ));

        return response()->json(['message' => 'Email sent!']);
    }
}
