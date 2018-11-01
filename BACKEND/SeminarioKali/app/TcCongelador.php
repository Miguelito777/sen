<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcCongelador extends Model
{
    protected $table = "tc_congelador";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'cantidad_minima',
        'tc_almacen_id_almacen'
    ];

    public function TcAlmacen(){
        return $this->hasOne('App\TcAlmacen','id','tc_almacen_id_almacen');
    }
    public function UnidadesCongelador(){
        return $this->hasMany('App\TtContenidoCongelador', 'tc_congelador_id', 'id');
    }
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}