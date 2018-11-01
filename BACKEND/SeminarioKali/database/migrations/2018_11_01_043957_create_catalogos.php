<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCatalogos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tc_estado_usuario', function (Blueprint $table) {
            $table->increments('id');
            $table->string('estado_usuario','88')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_perfil', function (Blueprint $table) {
            $table->increments('id');
            $table->string('perfil','88')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_parroquia', function(Blueprint $table){
            $table->increments('id');
            $table->string('parroquia','88')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_estado_crecimiento',function (Blueprint $table){
            $table->increments('id');
            $table->string('estado_crecimiento','8')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_estado_nutricional', function(Blueprint $table){
            $table->increments('id');
            $table->string('estado_nutricional','88')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_departamento',function(Blueprint $table){
            $table->increments('id');
            $table->string('departamento','88')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_genero', function (Blueprint $table){
            $table->increments('id');
            $table->string('genero','8')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_nivel_academico', function (Blueprint $table){
            $table->increments('id');
            $table->string('nivel_academico','888')->nullable();
            $table->timestamps();
        });
        Schema::create('tc_estado_persona', function (Blueprint $table){
            $table->increments('id');
            $table->string('estado_persona','88')->nullable();
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
        Schema::dropIfExists('tc_estado_usuario');
        Schema::dropIfExists('tc_perfil');
        Schema::dropIfExists('tc_parroquia');
        Schema::dropIfExists('tc_estado_crecimiento');
        Schema::dropIfExists('tc_estado_nutricional');
        Schema::dropIfExists('tc_departamento');
        Schema::dropIfExists('tc_genero');
        Schema::dropIfExists('tc_nivel_academico');
        Schema::dropIfExists('tc_estado_persona');
    }
}
