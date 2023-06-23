<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OthersController extends Controller
{
    public function other()
    {
        return Inertia::render("Front/Other");
    }
}