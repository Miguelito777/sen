<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtEvaluacion extends Model
{
    protected $table = "tt_evaluacion";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'evaluacion',
        'peso',
        'talla',
        'id_estado_persona',
        'id_ninio'
    ];
    public function detailsEvaluacion()
    {
        return $this->hasMany('App\TtDetalleEvaluacion');
    }
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
