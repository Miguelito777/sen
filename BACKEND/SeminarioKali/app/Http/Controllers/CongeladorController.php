<?php

namespace App\Http\Controllers;

use App\TcCongelador;
use Illuminate\Http\Request;

class CongeladorController extends Controller
{

    public function showAllCongelador()
    {
        return response()->json(TcCongelador::all());
    }

    public function showOneCongelador($id)
    {
        $congelador = TcCongelador::with('TcAlmacen')->where('id','=',$id)->get();
        return response()->json($congelador);
    }

    public function create(Request $request)
    {
        $congelador = TcCongelador::create($request->all());

        return response()->json($congelador, 201);
    }

    public function update($id, Request $request)
    {
        $congelador = TcCongelador::findOrFail($id);
        $congelador->update($request->all());

        return response()->json($congelador, 200);
    }

    public function delete($id)
    {
        TcCongelador::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    public function showAllContenidoCongeladores($id)
    {
        return response()->json(TcCongelador::find($id)->UnidadesCongelador);
    }
}