<?php

namespace App\Http\Controllers;

use App\TcIdioma;
use Illuminate\Http\Request;

class IdiomaController extends Controller
{

    public function showAllIdioma()
    {
        return response()->json(TcIdioma::all());
    }

    public function showOneIdioma($id)
    {
        return response()->json(TcIdioma::find($id));
    }

    public function create(Request $request)
    {
        $Idioma = TcIdioma::create($request->all());

        return response()->json($Idioma, 201);
    }

    public function update($id, Request $request)
    {
        $Idioma = TcIdioma::findOrFail($id);
        $Idioma->update($request->all());

        return response()->json($Idioma, 200);
    }

    public function delete($id)
    {
        TcIdioma::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    /*public function showAllCongeladores($id)
    {
        return response()->json(TcAlmacen::find($id)->Congeladores);
    }*/
    
}