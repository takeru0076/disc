<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Strategy;
use App\Http\Requests\StrategyRequest;

class StrategyController extends Controller
{
    public function strategy(Strategy $strategy)
    {
        return Inertia::render("Front/Strategy",["strategies" => $strategy->get()]);
    }
    
    public function create()
    {
         return Inertia::render("Front/Create_s");
    }
    
    public function store(StrategyRequest $request, Strategy $strategy)
    {
        $input = $request->all();
        $strategy->fill($input)->save();
        //dd($strategy->id);
        return redirect("/home/strategy/" . $strategy->id);
    }
    
        public function show(Strategy $strategy)
    {
        return Inertia::render("Front/Show_s", ["strategy" => $strategy]);
    }
    
    
    public function edit(Strategy $strategy)
    {
        return Inertia::render("Front/Edit_s", ["strategy" => $strategy]);
    }
        
    public function update(StrategyRequest $request, Strategy $strategy)
    {
        $input = $request->all();
        $strategy->fill($input)->save();
        return redirect("/home/strategy/" . $strategy->id);
    }
    
    public function delete(Strategy $strategy){
        $strategy->delete();
        return redirect("/home/strategy");
    }

}
