<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcTipoPeso extends Model
{
    protected $table = "tc_tipo_peso";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tipo_peso'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
