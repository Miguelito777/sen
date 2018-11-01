<?php

namespace App\Http\Controllers;

use App\TtDonante;
use Illuminate\Http\Request;

class DonanteController extends Controller
{

    public function showAllDonante()
    {
        $donante = TtDonante::with('TcTipoSangre')->get();
        return response()->json($donante);
    }

    public function showOneDonante($id)
    {
        $donante = TtDonante::with('TcTipoSangre')->where('id','=',$id)->get();
        return response()->json($donante);
    }
    
    public function showDonantesTipoSangre($id)
    {
        $donante = TtDonante::where('tc_tipo_sangre_id_tipo_sangre','=',$id)->get();
        return response()->json($donante);
    }
    
    public function create(Request $request)
    {
        $donante = TtDonante::create($request->all());

        return response()->json($donante, 201);
    }

    public function update($id, Request $request)
    {
        $donante = TtDonante::findOrFail($id);
        $donante->update($request->all());

        return response()->json($donante, 200);
    }

    public function delete($id)
    {
        TtDonante::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}