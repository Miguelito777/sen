<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TtDonante extends Model
{
    protected $table = "tc_donante";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'direccion',
        'telefonos',
        'correo',
        'fecha_nacimiento',
        'peso',
        'sexo',
        'epatitis',
        'tatAcuPir',
        'tc_tipo_sangre_id_tipo_sangre'
    ];

    public function TcTipoSangre(){
        return $this->hasOne('App\TcTipoSangre','id','tc_tipo_sangre_id_tipo_sangre');
    }

    
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}