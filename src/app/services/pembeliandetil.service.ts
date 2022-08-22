import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class PembelianDetilService {
  private baseUrl = "http://localhost:8081/api/v1/cartdetil";

  constructor(private http:HttpClient) { }

  createPembelianDetil(cartdetil: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, cartdetil);
  }  

}