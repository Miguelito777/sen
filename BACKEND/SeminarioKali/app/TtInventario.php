<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtInventario extends Model
{
    protected $table = "tt_inventario";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cantidad',
        'fecha_vencimiento',
        'estado',
        'ts_tipo_movimiento_id',
        'tc_tipo_sangre_id',
        'tt_unidad_congelador_id'
    ];

    /*public function TcTipoSangre(){
        return $this->hasOne('App\TcTipoSangre','id','tc_tipo_sangre_id_tipo_sangre');
    }*/

    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}