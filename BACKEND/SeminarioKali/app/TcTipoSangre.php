<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcTipoSangre extends Model
{
    protected $table = "tc_tipo_sangre";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descripcion_tipo_sangre',
        'cantidad_minima',
        'tc_factor_rh_id_factor_rh',
        'tc_grupo_sanguineo_id_grupo_sanguineo',
        'tc_unidades_id_unidades'
    ];

    public function TcGrupoSanguineo(){
        return $this->hasOne('App\TcGrupoSanguineo','id','tc_grupo_sanguineo_id_grupo_sanguineo');
    }

    public function TcFactorRh(){
        return $this->hasOne('App\TcFactorRh','id','tc_factor_rh_id_factor_rh');
    }

    public function TcUnidad(){
        return $this->hasOne('App\TcUnidad','id','tc_unidades_id_unidades');
    }
    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}