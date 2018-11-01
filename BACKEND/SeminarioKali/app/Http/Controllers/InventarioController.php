<?php

namespace App\Http\Controllers;

use App\TtInventario;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class InventarioController extends Controller
{

    public function create(Request $request)
    {
        $TtInventario = TtInventario::create($request->all());

        return response()->json($TtInventario, 201);
    }
    public function buscarSangre($cantidad, $idUnidad, $idTipoSangre){
        $sangre = DB::table('tt_inventario')
        ->select('tt_inventario.id','tt_inventario.fecha_vencimiento','tc_congelador.nombre as nombre_congelador','tc_almacen.nombre as nombre_almacen')
        ->join('tt_unidad_congelador', function ($join)use($idUnidad) {
            $join->on('tt_inventario.tt_unidad_congelador_id', '=', 'tt_unidad_congelador.id')
                 ->where('tt_unidad_congelador.tc_unidades_id', '=', $idUnidad);
        })
        ->join('tc_congelador', 'tt_unidad_congelador.tc_congelador_id', '=', 'tc_congelador.id')
        ->join('tc_almacen', 'tc_congelador.tc_almacen_id_almacen', '=', 'tc_almacen.id')
        ->where([['tt_inventario.cantidad', '>=', $cantidad],['tt_inventario.tc_tipo_sangre_id', '=', $idTipoSangre]])->get();
        //->select('tt_inventario.cantidad')
        //
        
        return response()->json($sangre);
    }
    public function quitarSangreVencida(){
        $dateCurrent = date('Y/m/d');
        $sangreVencida = DB::table('tt_inventario')
        ->select('tt_inventario.id','tt_inventario.cantidad','tt_inventario.fecha_vencimiento','tc_congelador.nombre as nombre_congelador','tc_almacen.nombre as nombre_almacen','tc_grupo_sanguineo.grupo_sanguineo','tc_factor_rh.factor_rh')
        ->join('tt_unidad_congelador','tt_inventario.tt_unidad_congelador_id', '=', 'tt_unidad_congelador.id')
        ->join('tc_congelador', 'tt_unidad_congelador.tc_congelador_id', '=', 'tc_congelador.id')
        ->join('tc_almacen', 'tc_congelador.tc_almacen_id_almacen', '=', 'tc_almacen.id')
        ->join('tc_tipo_sangre', 'tt_inventario.tc_tipo_sangre_id', '=', 'tc_tipo_sangre.id')
        ->join('tc_grupo_sanguineo','tc_tipo_sangre.tc_grupo_sanguineo_id_grupo_sanguineo', '=', 'tc_grupo_sanguineo.id')
        ->join('tc_factor_rh','tc_tipo_sangre.tc_factor_rh_id_factor_rh', '=', 'tc_factor_rh.id')
        ->where('tt_inventario.fecha_vencimiento', '<', $dateCurrent)->get();
        return response()->json($sangreVencida);
    }
    public function update($id, Request $request)
    {
        $contenidocongelador = TtInventario::findOrFail($id);
        $contenidocongelador->cantidad = $contenidocongelador->cantidad - $request->cantidad; 
        $contenidocongelador->update();

        return response()->json($contenidocongelador, 200);
    }
    public function delete($id)
    {
        TcTipoSangre::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}