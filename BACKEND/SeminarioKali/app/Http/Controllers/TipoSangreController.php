<?php

namespace App\Http\Controllers;

use App\TcTipoSangre;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TipoSangreController extends Controller
{

    public function showAllTipoSangre()
    {
        $tiposSangre = TcTipoSangre::with('TcGrupoSanguineo','TcFactorRh','TcUnidad')->get();
        return response()->json($tiposSangre);
    }
    
    public function existenciaTipoSangre()
    {
        //$tiposSangre = TcTipoSangre::with('TcGrupoSanguineo','TcFactorRh','TcUnidad')->get();
        //return response()->json($tiposSangre);
        /*$existencia = DB::table('tt_inventario')
        ->select(DB::raw('sum(tt_inventario.cantidad) as existencia, tc_tipo_sangre.descripcion_tipo_sangre,tc_grupo_sanguineo.grupo_sanguineo, tc_factor_rh.factor_rh'))
        ->join('tc_tipo_sangre', 'tt_inventario.tc_tipo_sangre_id', '=', 'tc_tipo_sangre.id')
        ->join('tc_grupo_sanguineo','tc_tipo_sangre.tc_grupo_sanguineo_id_grupo_sanguineo','tc_grupo_sanguineo.id')
        ->join('tc_factor_rh','tc_tipo_sangre.tc_factor_rh_id_factor_rh','tc_factor_rh.id')
        ->get();*/
        $existencia = DB::table('tt_inventario')
        ->select(DB::raw('sum(tt_inventario.cantidad) as existencia, tc_tipo_sangre.descripcion_tipo_sangre,tc_grupo_sanguineo.grupo_sanguineo, tc_factor_rh.factor_rh,tc_unidad.unidad,tc_tipo_sangre.cantidad_minima,tc_tipo_sangre.id'))
        ->join('tc_tipo_sangre', 'tt_inventario.tc_tipo_sangre_id', '=', 'tc_tipo_sangre.id')
        ->join('tc_grupo_sanguineo','tc_tipo_sangre.tc_grupo_sanguineo_id_grupo_sanguineo','tc_grupo_sanguineo.id')
        ->join('tc_factor_rh','tc_tipo_sangre.tc_factor_rh_id_factor_rh','tc_factor_rh.id')
        ->join('tc_unidad','tc_tipo_sangre.tc_unidades_id_unidades','tc_unidad.id')
        ->groupBy(DB::raw("tt_inventario.tc_tipo_sangre_id"))
        ->get();
        return response()->json($existencia);
    }
    public function showOneTipoSangre($id)
    {
        $tiposSangre = TcTipoSangre::with('TcGrupoSanguineo','TcFactorRh','TcUnidad')->where('id','=',$id)->get();
        return response()->json($tiposSangre);
    }

    public function create(Request $request)
    {
        $TipoSangre = TcTipoSangre::create($request->all());

        return response()->json($TipoSangre, 201);
    }

    public function update($id, Request $request)
    {
        $TipoSangre = TcTipoSangre::findOrFail($id);
        $TipoSangre->update($request->all());

        return response()->json($TipoSangre, 200);
    }

    public function delete($id)
    {
        TcTipoSangre::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    
}