<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    // И как правильно? Надо подумать
    public $autoincrement = false;
    public $incrementing = false;
    public function getIncrementing()
    {
        return false;
    }
    
    public function getKeyType()
    {
        return 'string';
    }    
}
