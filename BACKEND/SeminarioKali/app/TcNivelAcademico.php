<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcNivelAcademico extends Model
{
    protected $table = "tc_nivel_academico";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nivel_academico'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
