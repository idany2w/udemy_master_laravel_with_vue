<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bookable;

class BookableController extends Controller
{
    public function index(Request $request)
    {
        return Bookable::all();
    }

    public function show(Request $request, $id)
    {
        return Bookable::findOrFail($id);
    }
}
