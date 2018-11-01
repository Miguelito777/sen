<?php

namespace App\Http\Controllers;

use App\TcAlmacen;
use Illuminate\Http\Request;

class AlmacenController extends Controller
{

    public function showAllAlmacen()
    {
        return response()->json(TcAlmacen::all());
    }

    public function showOneAlmacen($id)
    {
        return response()->json(TcAlmacen::find($id));
    }

    public function create(Request $request)
    {
        $Almacen = TcAlmacen::create($request->all());

        return response()->json($Almacen, 201);
    }

    public function update($id, Request $request)
    {
        $Almacen = TcAlmacen::findOrFail($id);
        $Almacen->update($request->all());

        return response()->json($Almacen, 200);
    }

    public function delete($id)
    {
        TcAlmacen::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
    public function showAllCongeladores($id)
    {
        return response()->json(TcAlmacen::find($id)->Congeladores);
    }
    
}