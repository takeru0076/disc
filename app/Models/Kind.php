<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kind extends Model
{
    use HasFactory;
    
     protected $fillable = [
        "name"
    ];
    
        public function strategies()   
    {
        return $this->hasMany(Strategy::class);  
    }
}
