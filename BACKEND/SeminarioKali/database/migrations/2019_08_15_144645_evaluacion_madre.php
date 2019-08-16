<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EvaluacionMadre extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tt_evaluacion_madre', function (Blueprint $table){
            $table->increments('id');
            $table->string('evaluacion_madre')->nullable();
            $table->unsignedInteger('id_madre');
            $table->foreign('id_madre')->references('id')->on('tt_madre');
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
        Schema::dropIfExists('tt_evaluacion_madre');
    }
}
