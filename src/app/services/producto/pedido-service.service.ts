import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { ProductoModel } from 'src/app/model/producto';
import { environment } from 'src/environment/environments';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  private baseUrl = environment.localUrl;
  private path="/api/v1/producto"

  constructor( private httpClient: HttpClient) { }

  getAllProducto(): Observable<ProductoModel[]> {
    return this.httpClient.get<ProductoModel[]>(`${this.baseUrl}${this.path}/listar`);
  }

  saveProducto(request: any):Observable<any>  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>(`${this.baseUrl}${this.path}/crear`, request,{headers}).pipe(map(res => res));
  }

  updateStock(request: any): Observable<any> {
    return this.httpClient.patch<any>(`${this.baseUrl}${this.path}/ActualizarStockMas`, request).pipe(
      map(res => res)
    );
  }

  
}
