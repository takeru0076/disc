<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\KindController;
use App\Http\Controllers\OtherController;
use App\Http\Controllers\RuleController;
use App\Http\Controllers\StrategyController;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/{any}', function () {
  //  return view('app');
//})->where('any', '.*');    この3行をコメントアウト

Route::group(["middleware" => ["auth"]], function() {
   Route::get("/home", [HomeController::class, "home"])->name('home');
   Route::get("/home/whiteboard", [HomeController::class, "whiteboard"])->name('home.whiteboard');
});

Route::group(["middleware" => ["auth"]], function() {
    
     Route::get("/home", [StrategyController::class, "home"]);
    
     Route::get("/home/strategy", [StrategyController::class, "strategy"])->name('home.strategy');
     
     Route::post("/home/strategy", [StrategyController::class, "store"]);
     
     Route::get("/home/strategy/create", [StrategyController::class, "create"]);
     
     Route::get("/home/strategy/{strategy}", [StrategyController::class, "show"]);
     
     Route::get('/home/strategy/{strategy}/edit', [StrategyController::class, "edit"]);
     
     Route::put('/home/strategy/{strategy}', [StrategyController::class, "update"]);
     
     Route::delete("/home/strategy/{strategy}", [StrategyController::class, "delete"]);

});

Route::group(["middleware" => ["auth"]], function() {
    
     Route::get("/home/kind", [KindController::class, "kind"])->name('home.kind');
    
     Route::post("/home/kind", [KindController::class, "store"]);
     
     Route::get("/home/kind/create", [KindController::class, "create"]);
     
     Route::get("/home/kind/{kind}", [KindController::class, "show"]);
     
     Route::get('/home/kind/{kind}/edit', [KindController::class, "edit"]);
     
     Route::put('/home/kind/{kind}', [KindController::class, "update"]);
     
     Route::delete("/home/kind/{kind}", [KindController::class, "delete"]);

});

Route::group(["middleware" => ["auth"]], function() {
    
     Route::get("/home/rule", [RuleController::class, "rule"])->name('home.rule');
    
     Route::post("/home/rule", [RuleController::class, "store"]);
     
     Route::get("/home/rule/create", [RuleController::class, "create"]);
     
     Route::get("/home/rule/{rule}", [RuleController::class, "show"]);
     
     Route::get('/home/rule/{rule}/edit', [RuleController::class, "edit"]);
     
     Route::put('/home/rule/{rule}', [RuleController::class, "update"]);
     
     Route::delete("/home/rule/{rule}", [RuleController::class, "delete"]);

});

Route::group(["middleware" => ["auth"]], function() {

     Route::get("/home/other", [OtherController::class, "other"])->name('home.other');
    
     Route::post("/home/other", [OtherController::class, "store"]);
     
     Route::get("/home/other/create", [OtherController::class, "create"]);
     
     Route::get("/home/other/{other}", [OtherController::class, "show"]);
     
     Route::get('/home/other/{other}/edit', [OtherController::class, "edit"]);
     
     Route::put('/home/other/{other}', [OtherController::class, "update"]);
     
     Route::delete("/home/other/{other}", [OtherController::class, "delete"]);

});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
   return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Route::get('/home', function () {
//    return view('home');
//})->middleware(['auth'])->name('home');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
