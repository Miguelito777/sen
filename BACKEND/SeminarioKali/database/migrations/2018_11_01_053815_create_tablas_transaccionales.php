<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablasTransaccionales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tt_persona', function (Blueprint $table){
            $table->increments('id');
            $table->string('persona')->nullable();
            $table->float('peso_nacimiento',8,2);
            $table->date('fecha_nacimiento');
            $table->string('nombre_madre','88');
            $table->string('direccion','188');
            $table->string('telefono','18');
            $table->string('cui','28');
            $table->date('fecha_actualizacion');
            $table->unsignedInteger('id_municipio');
            $table->foreign('id_municipio')->references('id')->on('tc_municipio');
            $table->unsignedInteger('id_parroquia');
            $table->foreign('id_parroquia')->references('id')->on('tc_parroquia');
            $table->unsignedInteger('id_genero');
            $table->foreign('id_genero')->references('id')->on('tc_genero');
            $table->unsignedInteger('id_nivel_academico');
            $table->foreign('id_nivel_academico')->references('id')->on('tc_nivel_academico');
            $table->unsignedInteger('id_estado_persona');
            $table->foreign('id_estado_persona')->references('id')->on('tc_estado_persona');
        });
        Schema::create('tt_evaluacion', function (Blueprint $table){
            $table->increments('id');
            $table->string('evaluacion')->nullable();
            $table->float('peso',8,2);
            $table->float('talla',8,2);
            $table->unsignedInteger('id_estado_crecimiento');
            $table->foreign('id_estado_crecimiento')->references('id')->on('tc_estado_crecimiento');
            $table->unsignedInteger('id_estado_nutricional');
            $table->foreign('id_estado_nutricional')->references('id')->on('tc_estado_nutricional');
            $table->unsignedInteger('id_usuario');
            $table->foreign('id_usuario')->references('id')->on('tc_usuario');
            $table->unsignedInteger('id_persona');
            $table->foreign('id_persona')->references('id')->on('tt_persona');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tt_persona');
        Schema::dropIfExists('tt_evaluacion');
    }
}
