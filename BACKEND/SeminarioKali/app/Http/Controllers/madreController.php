<?php

namespace App\Http\Controllers;

use App\TtMadre;
use App\TcDepartamento;
use App\TcParroquia;
use App\TcNivelAcademico;
use App\TcTipoPeso;
use App\TcGenero;
use App\TtNinio;
use App\TcEstadoPersona;
use App\TtEvaluacion;
use App\TcMunicipio;

use Illuminate\Http\Request;

class MadreController extends Controller
{

    public function showAllMadre()
    {
        return response()->json(TtMadre::all());
    }

    public function showOneMadre($id)
    {
        $madre = TtMadre::with('municipio','parroquia','nivel_academico')->where('id','=',$id)->get();
        return response()->json($madre);
    }
    public function getEvaluacion($id)
    {
        return response()->json(TtEvaluacion::find($id));
    }
    
    public function create(Request $request)
    {
        $Madre = TtMadre::create($request->all());

        return response()->json($Madre, 201);
    }

    public function update($id, Request $request)
    {
        $Madre = TtMadre::findOrFail($id);
        $Madre->update($request->all());

        return response()->json($Madre, 200);
    }

    public function delete($id)
    {
        TtMadre::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    public function getMunicipios($id)
    {
        return response()->json(TcMunicipio::all());
    }
    public function getAllParroquias()
    {
        return response()->json(TcParroquia::all());
    }
    public function getAllNivelAcademico()
    {
        return response()->json(TcNivelAcademico::all());
    }
    public function getAllTipoPeso()
    {
        return response()->json(TcTipoPeso::all());
    }
    public function getAllGenero()
    {
        return response()->json(TcGenero::all());
    }

    public function createNinio(Request $request)
    {
        $Ninio = TtNinio::create($request->all());

        return response()->json($Ninio, 201);
    }
    public function getAllNinios()
    {
        return response()->json(TtNinio::all());
    }
    public function getAllEstadoPersona()
    {
        return response()->json(TcEstadoPersona::all());
    }
    public function createEvaluacion(Request $request)
    {
        $evaluacion = TtEvaluacion::create($request->all());
        $evaluacion->detailsEvaluacion()->createMany($request->detalles_evaluacion);
        return response()->json($evaluacion, 201);
    }
    public function getEvaluacionesNinio($id)
    {
        return response()->json(TtNinio::find($id)->Evaluaciones->groupby('month'));
    }
    
    public function updateEv($id, Request $request)
    {
        $item = TtEvaluacion::findOrFail($id);
        $item->update($request->all());

        return response()->json($item, 200);
    }
    public function deleteEv($id)
    {
        TtEvaluacion::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}