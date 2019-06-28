<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtNinio extends Model
{
    protected $table = "tt_ninio";
    
    /**
     * The attributes that are mass assignable.
     * 
     * @var array
     */
    protected $fillable = [
        'ninio',
        'peso_nacimiento',
        'fecha_nacimiento',
        'id_tipo_peso',
        'id_genero',
        'id_madre'
    ];
    public function Evaluaciones()
    {
        return $this->hasMany('App\TtEvaluacion', 'id_ninio', 'id');
    }
    public function genero(){
        return $this->hasOne('App\TcGenero','id','id_genero');
    }
    public function madre(){
        return $this->hasOne('App\TtMadre','id','id_madre');
    }
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
