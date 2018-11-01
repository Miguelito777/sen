<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('grupo-sanguineo',  ['uses' => 'GrupoSanguineoController@showAllGrupoSanguineo']);
  
    $router->get('grupo-sanguineo/{id}', ['uses' => 'GrupoSanguineoController@showOneGrupoSanguineo']);
  
    $router->post('grupo-sanguineo', ['uses' => 'GrupoSanguineoController@create']);
  
    $router->delete('grupo-sanguineo/{id}', ['uses' => 'GrupoSanguineoController@delete']);
  
    $router->put('grupo-sanguineo/{id}', ['uses' => 'GrupoSanguineoController@update']);

    

    $router->get('factor-rh',  ['uses' => 'FactorRhController@showAllFactorRh']);
  
    $router->get('factor-rh/{id}', ['uses' => 'FactorRhController@showOneFactorRh']);
  
    $router->post('factor-rh', ['uses' => 'FactorRhController@create']);
  
    $router->delete('factor-rh/{id}', ['uses' => 'FactorRhController@delete']);
  
    $router->put('factor-rh/{id}', ['uses' => 'FactorRhController@update']);


    $router->get('unidad',  ['uses' => 'UnidadController@showAllUnidad']);
  
    $router->get('unidad/{id}', ['uses' => 'UnidadController@showOneUnidad']);
  
    $router->post('unidad', ['uses' => 'UnidadController@create']);
  
    $router->delete('unidad/{id}', ['uses' => 'UnidadController@delete']);
  
    $router->put('unidad/{id}', ['uses' => 'UnidadController@update']);



    $router->get('tipo_movimiento',  ['uses' => 'TipoMovimientoController@showAllTipoMovimiento']);
  
    $router->get('tipo_movimiento/{id}', ['uses' => 'TipoMovimientoController@showOneTipoMovimiento']);
  
    $router->post('tipo_movimiento', ['uses' => 'TipoMovimientoController@create']);
  
    $router->delete('tipo_movimiento/{id}', ['uses' => 'TipoMovimientoController@delete']);
  
    $router->put('tipo_movimiento/{id}', ['uses' => 'TipoMovimientoController@update']);



    $router->get('almacen',  ['uses' => 'AlmacenController@showAllAlmacen']);
  
    $router->get('almacen/{id}', ['uses' => 'AlmacenController@showOneAlmacen']);
  
    $router->post('almacen', ['uses' => 'AlmacenController@create']);
  
    $router->delete('almacen/{id}', ['uses' => 'AlmacenController@delete']);
  
    $router->put('almacen/{id}', ['uses' => 'AlmacenController@update']);
    
    $router->get('almacen/{id}/congeladores',  ['uses' => 'AlmacenController@showAllCongeladores']);
    



    $router->get('tipo_sangre',  ['uses' => 'TipoSangreController@showAllTipoSangre']);

    $router->get('tipo_sangre/existencia',  ['uses' => 'TipoSangreController@existenciaTipoSangre']);
  
    $router->get('tipo_sangre/{id}', ['uses' => 'TipoSangreController@showOneTipoSangre']);
  
    $router->post('tipo_sangre', ['uses' => 'TipoSangreController@create']);
  
    $router->delete('tipo_sangre/{id}', ['uses' => 'TipoSangreController@delete']);
  
    $router->put('tipo_sangre/{id}', ['uses' => 'TipoSangreController@update']);


    $router->get('donante',  ['uses' => 'DonanteController@showAllDonante']);
  
    $router->get('donante/{id}', ['uses' => 'DonanteController@showOneDonante']);

    $router->get('donante/TipoSangre/{id}', ['uses' => 'DonanteController@showDonantesTipoSangre']);
  
    $router->post('donante', ['uses' => 'DonanteController@create']);
  
    $router->delete('donante/{id}', ['uses' => 'DonanteController@delete']);
  
    $router->put('donante/{id}', ['uses' => 'DonanteController@update']);

    


    $router->get('congelador',  ['uses' => 'CongeladorController@showAllCongelador']);
  
    $router->get('congelador/{id}', ['uses' => 'CongeladorController@showOneCongelador']);
    $router->get('congelador/{id}/unidades', ['uses' => 'CongeladorController@showAllContenidoCongeladores']);
  
    $router->post('congelador', ['uses' => 'CongeladorController@create']);
  
    $router->delete('congelador/{id}', ['uses' => 'CongeladorController@delete']);
  
    $router->put('congelador/{id}', ['uses' => 'CongeladorController@update']);


    $router->get('dashboard',  ['uses' => 'DashboardController@sangreTipo']);



    $router->get('contenido-congelador',  ['uses' => 'ContenidoCongeladorController@showAllContenidoCongelador']);
    $router->get('unidades-contenido-congelador/{id}',  ['uses' => 'ContenidoCongeladorController@showAllUnidadesContenidoCongelador']);
    $router->get('unidad/{idUnidad}/congelador/{idCongelador}',  ['uses' => 'ContenidoCongeladorController@showUnidadCongeladorCongelador']);

    $router->get('contenido-congelador/{id}', ['uses' => 'ContenidoCongeladorController@showOneContenidoCongelador']);
    
    $router->post('contenido-congelador', ['uses' => 'ContenidoCongeladorController@create']);
  
    $router->delete('contenido-congelador/{id}', ['uses' => 'ContenidoCongeladorController@delete']);
  
    $router->put('contenido-congelador/{id}', ['uses' => 'ContenidoCongeladorController@update']);
    

    $router->post('inventario', ['uses' => 'InventarioController@create']);
    $router->get('inventario/quitarVencidos', ['uses' => 'InventarioController@quitarSangreVencida']);
    $router->get('inventario/cantidad/{cantidad}/unidad/{idUnidad}/tipoSangre/{idTipoSangre}', ['uses' => 'InventarioController@buscarSangre']);
    $router->put('inventario/{id}', ['uses' => 'InventarioController@update']);
    $router->delete('inventario/{id}', ['uses' => 'ContenidoCongeladorController@delete']);

});