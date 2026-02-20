<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TypeController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/dashboard/type/add', [TypeController::class, "store"]);
Route::put('/dashboard/type/edit/{slug}', [TypeController::class, 'edit']);
Route::put('/dashboard/type/edit/image/{slug}', [TypeController::class, 'editImage']);
Route::delete('/dashboard/type/delete/{slug}', [TypeController::class, 'destroy']);
Route::put('/dashboard/type/delete/setupimage/{slug}/{index}', [TypeController::class, 'deleteSetupImage']);
