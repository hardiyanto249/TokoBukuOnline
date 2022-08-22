import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Buku } from '../common/buku';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  private baseUrl = "http://localhost:8081/api/v1/bukus";
  private updateUrl = "http://localhost:8081/api/v1/update";
  
  constructor(private httpClient: HttpClient) { }
  paramUrl: string | null;

  getBooksList(strKategori: string, currentPage: number, pageSize: number): Observable<GetResponseBooks> {
    if(strKategori.startsWith('all')){
      this.paramUrl = `/search/allbuku?page=${currentPage}&size=${pageSize}`;
    }else{
      this.paramUrl = `/search/kategori?kategori=${strKategori}&page=${currentPage}&size=${pageSize}`;
    }
    const searchUrl = `${this.baseUrl}${this.paramUrl}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl);
  }

  getKategoriList(): Observable<GetResponseBooks>{
    this.paramUrl = `/search/allbuku`;

    const searchUrl = `${this.baseUrl}${this.paramUrl}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl);
  }

  searchBuku(judul: string, currentPage: number, pageSize: number): Observable<GetResponseBooks> {
    const searchUrl = `${this.baseUrl}/search/judul?judul=${judul}&page=${currentPage}&size=${pageSize}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl);
  }

  get(bukuId: string): Observable<Buku[]> {
    const detilBukuUrl = `${this.baseUrl}/search/id?id=${bukuId}`;
    return this.httpClient.get<GetResponseBooks>(detilBukuUrl).pipe(
      map(response => response._embedded.bukus)
    );
  }

  updateQuantityBuku(buku: object): Observable<Object>{
    return this.httpClient.put(`${this.updateUrl}/quantity`, buku);
  }  

}

interface GetResponseBooks{
  _embedded: {
    bukus: Buku[];
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