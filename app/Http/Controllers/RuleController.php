<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Rule;
use App\Http\Requests\RuleRequest;

class RuleController extends Controller
{
    public function rule(Rule $rule)
    {
        return Inertia::render("Front/Rule",["rules" => $rule->get()]);
    }
    
    public function create()
    {
         return Inertia::render("Front/Create_r");
    }
    
    public function store(RuleRequest $request, Rule $rule)
    {
        $input = $request->all();
        $rule->fill($input)->save();
        //dd($strategy->id);
        return redirect("/home/rule/" . $rule->id);
    }
    
        public function show(Rule $rule)
    {
        return Inertia::render("Front/Show_r", ["rule" => $rule]);
    }
    
    
    public function edit(Rule $rule)
    {
        return Inertia::render("Front/Edit_r", ["rule" => $rule]);
    }
        
    public function update(RuleRequest $request, Rule $rule)
    {
        $input = $request->all();
        $other->fill($input)->save();
        return redirect("/home/rule/" . $rule->id);
    }
    
    public function delete(Rule $rule)
    {
        $rule->delete();
        return redirect("/home/rule");
    }

}
