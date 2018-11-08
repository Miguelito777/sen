<?php

namespace App\Http\Controllers;

use App\TtNinio;
use Illuminate\Http\Request;

class NinioController extends Controller
{

    public function showAllNinio()
    {
        return response()->json(TtNinio::all());
    }

    public function showOneNinio($id)
    {
        return response()->json(TtNinio::find($id));
    }

    public function create(Request $request)
    {
        $Ninio = TtNinio::create($request->all());

        return response()->json($Ninio, 201);
    }

    public function update($id, Request $request)
    {
        $Ninio = TtNinio::findOrFail($id);
        $Ninio->update($request->all());

        return response()->json($Ninio, 200);
    }

    public function delete($id)
    {
        TtNinio::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    /*public function showAllCongeladores($id)
    {
        return response()->json(TcAlmacen::find($id)->Congeladores);
    }*/
    
}