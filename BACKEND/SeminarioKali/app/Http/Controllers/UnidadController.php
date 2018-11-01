<?php

namespace App\Http\Controllers;

use App\TcUnidad;
use Illuminate\Http\Request;

class UnidadController extends Controller
{

    public function showAllUnidad()
    {
        return response()->json(TcUnidad::all());
    }

    public function showOneUnidad($id)
    {
        return response()->json(TcUnidad::find($id));
    }

    public function create(Request $request)
    {
        $Unidad = TcUnidad::create($request->all());

        return response()->json($Unidad, 201);
    }

    public function update($id, Request $request)
    {
        $Unidad = TcUnidad::findOrFail($id);
        $Unidad->update($request->all());

        return response()->json($Unidad, 200);
    }

    public function delete($id)
    {
        TcUnidad::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}