<?php

namespace App\Http\Controllers;

use App\TcTipoMovimiento;
use Illuminate\Http\Request;

class TipoMovimientoController extends Controller
{

    public function showAllTipoMovimiento()
    {
        return response()->json(TcTipoMovimiento::all());
    }

    public function showOneTipoMovimiento($id)
    {
        return response()->json(TcTipoMovimiento::find($id));
    }

    public function create(Request $request)
    {
        $TcTipoMovimiento = TcTipoMovimiento::create($request->all());

        return response()->json($TcTipoMovimiento, 201);
    }

    public function update($id, Request $request)
    {
        $TcTipoMovimiento = TcTipoMovimiento::findOrFail($id);
        $TcTipoMovimiento->update($request->all());

        return response()->json($TcTipoMovimiento, 200);
    }

    public function delete($id)
    {
        TcTipoMovimiento::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}