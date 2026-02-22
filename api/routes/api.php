<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\PopupController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// TYPES
Route::get('/dashboard/types', [TypeController::class, 'get']);
Route::post('/dashboard/type/add', [TypeController::class, "store"]);
Route::put('/dashboard/type/edit/{slug}', [TypeController::class, 'edit']);
Route::put('/dashboard/type/edit/image/{slug}', [TypeController::class, 'editImage']);
Route::delete('/dashboard/type/delete/{slug}', [TypeController::class, 'destroy']);
Route::put('/dashboard/type/delete/setupimage/{slug}/{index}', [TypeController::class, 'deleteSetupImage']);

// BLOGS
Route::get('/dashboard/blogs', [BlogController::class, 'get']);
Route::post('/dashboard/blogs/add', [BlogController::class, 'add']);
Route::delete('/dashboard/blogs/delete/{id}', [BlogController::class, 'delete']);
Route::put('dashboard/blogs/edit/{id}', [BlogController::class, 'edit']);
Route::put('dashboard/blogs/edit/image/{id}', [BlogController::class, 'editImage']);

// PORTFOLIOS
Route::get('/dashboard/portfolios', [PortfolioController::class, 'get']);
Route::post('/dashboard/portfolio/add', [PortfolioController::class, 'store']);
Route::delete('dashboard/portfolio/delete/{id}', [PortfolioController::class, 'destroy']);

// POPUP
Route::get('/dashboard/popup', [PopupController::class, 'get']);
Route::post('/dashboard/popup/add', [PopupController::class, 'store']);
Route::put('/dashboard/popup/edit/{id}', [PopupController::class, 'edit']);