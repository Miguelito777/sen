<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIdioma extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('tc_idioma', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idioma','88')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tc_idioma');
    }
}
