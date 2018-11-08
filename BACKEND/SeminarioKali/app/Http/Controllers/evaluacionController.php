<?php

namespace App\Http\Controllers;

use App\TtEvaluacion;
use App\TtDetalleEvaluacion;
use Illuminate\Http\Request;

class EvaluacionController extends Controller
{

    public function showAllEvaluacion()
    {
        return response()->json(TtEvaluacion::all());
    }

    public function showOneEvaluacion($id)
    {
        return response()->json(TtEvaluacion::find($id));
    }

    public function create(Request $request)
    {
        $Evaluacion = TtEvaluacion::create($request->all());

        return response()->json($Evaluacion, 201);
    }

    public function createDetalleEvaluacion(Request $request)
    {
        $DetalleEvaluacion = TtDetalleEvaluacion::create($request->all());

        return response()->json($DetalleEvaluacion, 201);
    }

    public function update($id, Request $request)
    {
        $Evaluacion = TtEvaluacion::findOrFail($id);
        $Evaluacion->update($request->all());

        return response()->json($Evaluacion, 200);
    }

    public function delete($id)
    {
        TtEvaluacion::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    /*public function showAllCongeladores($id)
    {
        return response()->json(TcAlmacen::find($id)->Congeladores);
    }*/
    
}