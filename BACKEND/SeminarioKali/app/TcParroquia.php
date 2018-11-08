<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TcParroquia extends Model
{
    protected $table = "tc_parroquia";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parroquia'
    ];
        /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
