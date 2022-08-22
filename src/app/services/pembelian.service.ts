import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';  
import { Pembelian } from '../common/pembelian';

@Injectable({
  providedIn: 'root'
})
export class PembelianService {

    private baseUrl = "http://localhost:8081/api/v1/pembelians";
  
  constructor(private httpClient: HttpClient) { }

  createPembelian(pembelian: object): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, pembelian);
  }  

  get(idPembelian: string): Observable<Pembelian[]> {
    const pembelianUrl = `${this.baseUrl}/search/id?idPembelian=${idPembelian}`;
    return this.httpClient.get<GetResponsePembelians>(pembelianUrl).pipe(
      map(response => response._embedded.pembelians)
    );
  }
}

  interface GetResponsePembelians{
    _embedded: {
      pembelians: Pembelian[];
    },
    page: {
      //cureent page
      size: number,
      //total number of records in database
      totalElements: number,
      //total number of pages, starts from 0 index
      totalPages: number,
      //current page
      number: number
    }
  }
