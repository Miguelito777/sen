<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcDepartamento extends Model
{
    protected $table = "tc_departamento";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'departamento'
    ];
    public function Municipios(){
        return $this->hasMany('App\TcMunicipio', 'id_departamento', 'id');
    }
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
