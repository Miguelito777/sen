<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtMadre extends Model
{
    protected $table = "tt_madre";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'madre',
        'direccion',
        'telefono',
        'cui',
        'id_municipio',
        'id_parroquia',
        'id_nivel_academico'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
