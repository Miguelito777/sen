<?php

namespace App\Http\Controllers;

use App\TcGrupoSanguineo;
use Illuminate\Http\Request;

class GrupoSanguineoController extends Controller
{

    public function showAllGrupoSanguineo()
    {
        return response()->json(TcGrupoSanguineo::all());
    }

    public function showOneGrupoSanguineo($id)
    {
        return response()->json(TcGrupoSanguineo::find($id));
    }

    public function create(Request $request)
    {
        $grupoSanguineo = TcGrupoSanguineo::create($request->all());

        return response()->json($grupoSanguineo, 201);
    }

    public function update($id, Request $request)
    {
        $grupoSanguineo = TcGrupoSanguineo::findOrFail($id);
        $grupoSanguineo->update($request->all());

        return response()->json($grupoSanguineo, 200);
    }

    public function delete($id)
    {
        TcGrupoSanguineo::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}