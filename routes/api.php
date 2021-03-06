<?php

use App\Http\Controllers\Api\BookableAvailabilityController;
use App\Http\Controllers\Api\BookableReviewController;
use App\Http\Controllers\Api\BookableController;
use App\Http\Controllers\Api\BookablePriceController;
use App\Http\Controllers\Api\BookingByReviewController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\ReviewController;
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

Route::apiResource('bookables', BookableController::class)
    ->except([])
    ->only(['index', 'show']);

Route::get('bookables/{bookable}/availability', BookableAvailabilityController::class)
    ->name('bookables.availability.show');

Route::get('bookables/{bookable}/reviews', BookableReviewController::class)
->name('bookables.reviews.index');

Route::get('booking-by-review/{review_key}', BookingByReviewController::class)
    ->name('booking.by-review.show');

Route::get('bookables/{bookable}/price', BookablePriceController::class)
    ->name('bookabless.price.show');

Route::apiResource('reviews', ReviewController::class)
    ->except([])
    ->only(['show', 'store']);


Route::post('checkout', CheckoutController::class)
    ->name('checkout');