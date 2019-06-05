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
        Schema::create('tc_tipo_peso', function (Blueprint $table){
            $table->increments('id');
            $table->string('tipo_peso')->nullable();
            $table->timestamps();
        });

        Schema::create('tt_madre', function (Blueprint $table){
            $table->increments('id');
            $table->string('madre')->nullable();
            $table->string('direccion','188');
            $table->string('telefono','18');
            $table->string('cui','28');
            $table->unsignedInteger('id_municipio');
            $table->foreign('id_municipio')->references('id')->on('tc_municipio');
            $table->unsignedInteger('id_parroquia');
            $table->foreign('id_parroquia')->references('id')->on('tc_parroquia');
            $table->unsignedInteger('id_nivel_academico');
            $table->foreign('id_nivel_academico')->references('id')->on('tc_nivel_academico');
            $table->timestamps();
        });

        Schema::create('tt_ninio', function (Blueprint $table){
            $table->increments('id');
            $table->string('ninio')->nullable();
            $table->float('peso_nacimiento',8,2);
            $table->date('fecha_nacimiento');
            $table->unsignedInteger('id_tipo_peso');
            $table->foreign('id_tipo_peso')->references('id')->on('tc_tipo_peso');
            $table->unsignedInteger('id_genero');
            $table->foreign('id_genero')->references('id')->on('tc_genero');
            $table->unsignedInteger('id_madre');
            $table->foreign('id_madre')->references('id')->on('tt_madre');
            $table->timestamps();
        });

        Schema::create('tt_evaluacion', function (Blueprint $table){
            $table->increments('id');
            $table->string('evaluacion','88')->nullable();
            $table->float('peso', 8, 2);
            $table->float('talla', 8, 2);
            $table->timestamps();
        });
        Schema::create('tt_detalle_evaluacion', function (Blueprint $table){
            $table->increments('id');
            $table->string('detalle_evaluacion','888')->nullable();
            $table->unsignedInteger('id_estado_persona');
            $table->foreign('id_estado_persona')->references('id')->on('tc_estado_persona');
            $table->unsignedInteger('id_evaluacion');
            $table->foreign('id_evaluacion')->references('id')->on('tt_evaluacion');
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
        Schema::dropIfExists('tc_tipo_peso');
        Schema::dropIfExists('tt_madre');
        Schema::dropIfExists('tt_ninio');
        Schema::dropIfExists('tt_evaluacion');
        Schema::dropIfExists('tt_detalle_evaluacion');
    }
}

