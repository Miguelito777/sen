<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcMunicipio extends Model
{
    protected $table = "tc_municipio";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'municipio',
        'id_departamento'
    ];
    public function TcAlmacen(){
        return $this->hasOne('App\TcDepartamento','id','id_departamento');
    }
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
