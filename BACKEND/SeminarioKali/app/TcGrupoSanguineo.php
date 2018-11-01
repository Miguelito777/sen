<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcGrupoSanguineo extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'grupo_sanguineo'
    ];
    protected $table = "tc_grupo_sanguineo";
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}