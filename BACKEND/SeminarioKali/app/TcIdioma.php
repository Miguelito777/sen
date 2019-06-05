<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcIdioma extends Model
{
    protected $table = "tc_idioma";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'idioma'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}

