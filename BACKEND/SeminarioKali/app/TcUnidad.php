<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcUnidad extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'unidad'
    ];
    protected $table = "tc_unidad";
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}