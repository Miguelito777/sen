<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcEstadoPersona extends Model
{
    protected $table = "tc_estado_persona";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'estado_persona'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
