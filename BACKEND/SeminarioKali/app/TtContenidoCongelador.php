<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtContenidoCongelador extends Model
{
    protected $table = "tt_unidad_congelador";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cantidadMaxima',
        'tc_unidades_id',
        'tc_congelador_id'
    ];

    public function TcUnidad(){
        return $this->hasOne('App\TcUnidad','id','tc_unidades_id');
    }
    public function TcCongelador(){
        return $this->hasOne('App\TcCongelador','id','tc_congelador_id');
    }
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}