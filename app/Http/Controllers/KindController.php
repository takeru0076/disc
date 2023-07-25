<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Kind;
use App\Models\Strategy;
use App\Http\Requests\KindRequest;

class KindController extends Controller
{
    public function kind(Kind $kind)
    {
        return Inertia::render("Front/Kind",["kinds" => $kind->get()]);
    }
    
    public function create()
    {
         return Inertia::render("Front/Create_k");
    }
    
    public function store(KindRequest $request, Kind $kind)
    {
        $input = $request->all();
        $kind->fill($input)->save();
        //dd($strategy->id);
        return redirect("/home/kind/" . $kind->id);
    }
    
        public function show(Kind $kind, Strategy $strategy)
    {
        return Inertia::render("Front/Show_k", ["kind" => $kind,"strategies" => $strategy->get()]);
    }
    
    
    public function edit(Kind $kind)
    {
        return Inertia::render("Front/Edit_k", ["kind" => $kind]);
    }
        
    public function update(KindRequest $request, Kind $kind)
    {
        $input = $request->all();
        $kind->fill($input)->save();
        return redirect("/home/kind/" . $kind->id);
    }
    
    public function delete(Kind $kind)
    {
        $kind->delete();
        return redirect("/home/kind");
    }

}

