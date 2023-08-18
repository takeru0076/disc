<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Other;
use App\Http\Requests\OtherRequest;

class OtherController extends Controller
{
    public function other(Other $other)
    {
        return Inertia::render("Front/Other",["others" => $other->get()]);
    }
    
    public function create()
    {
         return Inertia::render("Front/Create_o");
    }
    
    public function store(OtherRequest $request, Other $other)
    {
        $input = $request->all();
        $other->fill($input)->save();
        //dd($strategy->id);
        return redirect("/home/other/" . $other->id);
    }
    
        public function show(Other $other)
    {
        return Inertia::render("Front/Show_o", ["other" => $other]);
    }
    
    
    public function edit(Other $other)
    {
        return Inertia::render("Front/Edit_o", ["other" => $other]);
    }
        
    public function update(OtherRequest $request, Other $other)
    {
        $input = $request->all();
        $other->fill($input)->save();
        return redirect("/home/other/" . $other->id);
    }
    
    public function delete(Other $other)
    {
        $other->delete();
        return redirect("/home/other");
    }

}