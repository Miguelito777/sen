import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://localhost:8000/api/";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  //CRUD PARA FACTOR RH
  getFactorRh(): Observable<any> {
    const url = `${apiUrl}factor-rh`;
    return this.http.get(url/*apiUrl, httpOptions*/).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getFactorRhId(id: string): Observable<any> {
    const url = `${apiUrl}factor-rh/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postFactorRh(data): Observable<any> {
    const url = `${apiUrl}factor-rh`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateFactorRh(id: string, data): Observable<any> {
    const url = `${apiUrl}factor-rh/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteFactorRh(id: string): Observable<{}> {
    const url = `${apiUrl}factor-rh/${id}`;
    return this.http.delete(url/*, httpOptions*/)
      .pipe(
        catchError(this.handleError)
      );
  }

  // CRUD PARA GRUPO SANGUINEO
  getGrupoSanguineo(): Observable<any> {
    const url = `${apiUrl}grupo-sanguineo`;
    return this.http.get(url/*, httpOptions*/).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getGrupoSanguineoById(id: string): Observable<any> {
    const url = `${apiUrl}grupo-sanguineo/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postGrupoSanguineo(data): Observable<any> {
    const url = `${apiUrl}grupo-sanguineo`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateGrupoSanguineo(id: string, data): Observable<any> {
    const url = `${apiUrl}grupo-sanguineo/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteGrupoSanguineo(id: string): Observable<{}> {
    const url = `${apiUrl}grupo-sanguineo/${id}`;
    return this.http.delete(url/*, httpOptions*/)
      .pipe(
        catchError(this.handleError)
      );
  }

  // CRUD PARA UNIDADES

  getUnidades(): Observable<any> {
    const url = `${apiUrl}unidad`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getUnidadesById(id: string): Observable<any> {
    const url = `${apiUrl}unidad/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postUnidades(data): Observable<any> {
    const url = `${apiUrl}unidad`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUnidades(id: string, data): Observable<any> {
    const url = `${apiUrl}unidad/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUnidades(id: string): Observable<{}> {
    const url = `${apiUrl}unidad/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  //CRUD PARA TIPO MOVIMIENTO
  getTipoMovimiento(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getTipoMovimientoById(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postTipoMovimiento(data): Observable<any> {
    const url = `${apiUrl}/add_with_students`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTipoMovimiento(id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTipoMovimiento(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // CRUD PARA ALMACEN

  getAlmacen(): Observable<any> {
    const url = `${apiUrl}almacen`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getAlmacenById(id: string): Observable<any> {
    const url = `${apiUrl}almacen/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postAlmacen(data): Observable<any> {
    const url = `${apiUrl}almacen`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateAlmacen(id: string, data): Observable<any> {
    const url = `${apiUrl}almacen/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAlmacen(id: string): Observable<{}> {
    const url = `${apiUrl}almacen/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getCongeladoresAlmacen(id: string): Observable<any> {
    const url = `${apiUrl}almacen/${id}/congeladores`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  // CRUD PARA TIPOS DE SANGRE

  getTiposSangre(): Observable<any> {
    const url = `${apiUrl}tipo_sangre`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getTipoSangreById(id: string): Observable<any> {
    const url = `${apiUrl}tipo_sangre/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postTipoSangre(data): Observable<any> {
    const url = `${apiUrl}tipo_sangre`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTipoSangre(id: string, data): Observable<any> {
    const url = `${apiUrl}tipo_sangre/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTipoSangre(id: string): Observable<{}> {
    const url = `${apiUrl}tipo_sangre/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // CRUD PARA DONANTES 

  getDonantes(): Observable<any> {
    const url = `${apiUrl}donante`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getDonanteById(id: string): Observable<any> {
    const url = `${apiUrl}donante/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getDonantesTipoSangre(id: string): Observable<any> {
    const url = `${apiUrl}donante/TipoSangre/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postDonante(data): Observable<any> {
    const url = `${apiUrl}donante`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDonante(id: string, data): Observable<any> {
    const url = `${apiUrl}donante/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteDonante(id: string): Observable<{}> {
    const url = `${apiUrl}donante/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // CRUD PARA CONGELADORES

  getCongeladores(): Observable<any> {
    const url = `${apiUrl}congelador`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getCongeladorById(id: string): Observable<any> {
    const url = `${apiUrl}congelador/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getUnidadesCongeladorById(id: string): Observable<any> {
    const url = `${apiUrl}unidades-contenido-congelador/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getUnidadCongeladorById(idUnidad: string, idCongelador: string): Observable<any> {
    const url = `${apiUrl}unidad/${idUnidad}/congelador/${idCongelador}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postCongelador(data): Observable<any> {
    const url = `${apiUrl}congelador`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCongelador(id: string, data): Observable<any> {
    const url = `${apiUrl}congelador/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCongelador(id: string): Observable<{}> {
    const url = `${apiUrl}congelador/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // CRUD PARA UNIDADES CONGELADORES

  getContenidoCongeladores(): Observable<any> {
    const url = `${apiUrl}congelador`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getContenidoCongeladoresById(id: string): Observable<any> {
    const url = `${apiUrl}contenido-congelador/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postContenidoCongeladores(data): Observable<any> {
    const url = `${apiUrl}contenido-congelador`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateContenidoCongeladores(id: string, data): Observable<any> {
    const url = `${apiUrl}contenido-congelador/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteContenidoCongeladores(id: string): Observable<{}> {
    const url = `${apiUrl}contenido-congelador/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  // INVENTARIO
  postSangreInventario(data): Observable<any> {
    const url = `${apiUrl}inventario`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getSangreInventario(cantidad: string, unidad: string, idTipoSang: string): Observable<any> {
    const url = `${apiUrl}inventario/cantidad/${cantidad}/unidad/${unidad}/tipoSangre/${idTipoSang}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getSangreVencida(): Observable<any> {
    const url = `${apiUrl}inventario/quitarVencidos`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  updateInventario(id: string, data): Observable<any> {
    const url = `${apiUrl}inventario/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteInventario(id: string): Observable<{}> {
    const url = `${apiUrl}inventario/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  //EXISTENCIA DE SANGRE
  getExistenciaSangre(): Observable<any> {
    const url = `${apiUrl}tipo_sangre/existencia`;
    return this.http.get(url/*apiUrl, httpOptions*/).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }






  // SERVICIOS SEN

  getMunicipios(idDepartamento): Observable<any> {
    const url = `${apiUrl}municipios/${idDepartamento}`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getParroquias(): Observable<any> {
    const url = `${apiUrl}parroquias`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getIdiomas(): Observable<any> {
    const url = `${apiUrl}Idioma`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getNivelesAcademicos(): Observable<any> {
    const url = `${apiUrl}niveles-academicos`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  insMadre(data): Observable<any> {
    const url = `${apiUrl}madre`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getMadres(): Observable<any> {
    const url = `${apiUrl}madres`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getMadre(id): Observable<any> {
    const url = `${apiUrl}madre/${id}`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  updateMadre(id: string, data): Observable<any> {
    const url = `${apiUrl}madre/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteMadre(id: string): Observable<{}> {
    const url = `${apiUrl}madre/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getTipoPeso(): Observable<any> {
    const url = `${apiUrl}TiposPeso`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getGeneros(): Observable<any> {
    const url = `${apiUrl}generos`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  insNinio(data): Observable<any> {
    const url = `${apiUrl}ninio`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getNinios(): Observable<any> {
    const url = `${apiUrl}ninios`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getEstadosPersona(): Observable<any> {
    const url = `${apiUrl}estado-persona`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  insEvaluacion(data): Observable<any> {
    const url = `${apiUrl}nueva-evaluacion`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getEvaluacionesNinio(idNinio): Observable<any> {
    const url = `${apiUrl}evaluaciones-ninio/${idNinio}`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
