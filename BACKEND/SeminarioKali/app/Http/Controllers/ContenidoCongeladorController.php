<?php

namespace App\Http\Controllers;

use App\TtContenidoCongelador;
use Illuminate\Http\Request;

class ContenidoCongeladorController extends Controller
{

    public function showAllContenidoCongelador()
    {
        return response()->json(TtContenidoCongelador::with('TcUnidad')->get());
    }
    public function showAllUnidadesContenidoCongelador($id)
    {
        return response()->json(TtContenidoCongelador::with('TcUnidad')->where('tc_congelador_id','=',$id)->get());
    }
    public function showUnidadCongeladorCongelador($idUnidad,$idCongelador)
    {
        return response()->json(TtContenidoCongelador::where([['tc_unidades_id','=',$idUnidad],['tc_congelador_id','=',$idCongelador]])->get());
    }
    public function showOneContenidoCongelador($id)
    {
        $contenidocongelador = TtContenidoCongelador::with('TcUnidad','TcCongelador')->where('id','=',$id)->get();
        return response()->json($contenidocongelador);
    }

    public function create(Request $request)
    {
        $contenidocongelador = TtContenidoCongelador::create($request->all());

        return response()->json($contenidocongelador, 201);
    }

    public function update($id, Request $request)
    {
        $contenidocongelador = TtContenidoCongelador::findOrFail($id);
        $contenidocongelador->update($request->all());

        return response()->json($contenidocongelador, 200);
    }

    public function delete($id)
    {
        TtContenidoCongelador::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}