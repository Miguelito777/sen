<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcGenero extends Model
{
    protected $table = "tc_genero";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'genero'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
