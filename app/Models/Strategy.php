<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class strategy extends Model
{
    use HasFactory;
    
     protected $fillable = [
        "name",
        "text",
        "kind_id",
        "user_id"
    ];
    
        public function user()
    {
        return $this->belongsTo(User::class);
    }
    
        public function kind()
    {
        return $this->belongsTo(Kind::class);
    }
}
