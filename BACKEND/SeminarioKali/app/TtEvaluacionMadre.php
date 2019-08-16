<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtEvaluacionMadre extends Model
{
    protected $table = "tt_evaluacion_madre";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'evaluacion_madre',
        'id_madre'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
