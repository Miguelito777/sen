<?php

namespace App\Http\Controllers;

use App\TcFactorRh;
use Illuminate\Http\Request;

class FactorRhController extends Controller
{

    public function showAllFactorRh()
    {
        return response()->json(TcFactorRh::all());
    }

    public function showOneFactorRh($id)
    {
        return response()->json(TcFactorRh::find($id));
    }

    public function create(Request $request)
    {
        $FactorRh = TcFactorRh::create($request->all());

        return response()->json($FactorRh, 201);
    }

    public function update($id, Request $request)
    {
        $FactorRh = TcFactorRh::findOrFail($id);
        $FactorRh->update($request->all());

        return response()->json($FactorRh, 200);
    }

    public function delete($id)
    {
        TcFactorRh::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}