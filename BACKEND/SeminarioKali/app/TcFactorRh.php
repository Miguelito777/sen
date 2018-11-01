<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcFactorRh extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'factor_rh'
    ];
    protected $table = "tc_factor_rh";
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}