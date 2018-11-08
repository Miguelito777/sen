<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtDetalleEvaluacion extends Model
{
    protected $table = "tt_detalle_evaluacion";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'detalle_evaluacion',
        'id_estado_persona',
        'id_evaluacion'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
