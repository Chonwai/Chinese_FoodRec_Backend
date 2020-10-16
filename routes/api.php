<?php

use App\Http\Controllers\Apis\ChineseCuisineController;
use App\Http\Controllers\Apis\TasteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/v1')->group(function () {
    /**
     * Taste API ------------------------------------------------------------
     *
     * @api
     */

    // Get All Tastes API
    Route::get('/tastes/all', [TasteController::class, 'responseAll']);

    /**
     * Chinese Cuisine API ------------------------------------------------------------
     *
     * @api
     */
    // Get All Chinese Cuisines API
    Route::get('/chinese/cuisines/all', [ChineseCuisineController::class, 'responseAll']);

    /**
     * Dish API ------------------------------------------------------------
     *
     * @api
     */
    // Get All Dishes API
    Route::get('/dishes/all', [ChineseCuisineController::class, 'responseAll']);

});
