<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Strategy;
use App\Models\Kind;
use App\Models\User;
use App\Http\Requests\StrategyRequest;
use Illuminate\Support\Facades\Auth;

class StrategyController extends Controller
{
    public function strategy(Strategy $strategy)
    {
        return Inertia::render("Front/Strategy",["strategies" => $strategy::with("kind" , "user")->get()]);
    }
    
    public function create(Kind $kind)
    {
         return Inertia::render("Front/Create_s",["kinds" => $kind->get()]);
    }
    
    public function store(StrategyRequest $request, Strategy $strategy)
    {
        $input = $request->all();
        $user = Auth::user();
        //dd($user->id);
        $input += ["user_id" => $user->id];
        //dd($input);
        $strategy->fill($input)->save();
        //dd($strategy->id);
        return redirect("/home/strategy/" . $strategy->id);
    }
    
        public function show(Strategy $strategy)
    {
        return inertia("Front/Show_s", ["strategy" => $strategy->load('kind')]);
    }
    
    
   public function edit(Strategy $strategy, Kind $kind){
    return Inertia::render("Front/Edit_s", ["strategy" => $strategy->load('kind'),"kinds" => $kind->get()]);
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
