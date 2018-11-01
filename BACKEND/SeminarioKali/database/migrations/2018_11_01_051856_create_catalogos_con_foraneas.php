<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCatalogosConForaneas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tc_municipio', function (Blueprint $table){
            $table->increments('id');
            $table->string('municipio');
            $table->unsignedInteger('id_departamento');
            $table->foreign('id_departamento')->references('id')->on('tc_departamento');
            $table->timestamps();
        });

        Schema::create('tc_usuario', function (Blueprint $table){
            $table->increments('id');
            $table->string('usuario','88')->nullable();
            $table->string('password','88')->nullable();
            $table->unsignedInteger('id_perfil');
            $table->foreign('id_perfil')->references('id')->on('tc_perfil');
            $table->unsignedInteger('id_estado_usuario');
            $table->foreign('id_estado_usuario')->references('id')->on('tc_estado_usuario');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tc_municipio');
        Schema::dropIfExists('tc_usuario');
    }
}
