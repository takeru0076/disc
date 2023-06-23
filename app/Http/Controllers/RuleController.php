<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RulesController extends Controller
{
    public function rule()
    {
        return Inertia::render("Front/Rule");
    }
}