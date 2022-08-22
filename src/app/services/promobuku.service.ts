import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromoBuku } from '../common/promoBuku';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromoBukuService {
  hargaPromo: string | null;
  harga: any;

  private baseUrl = "http://localhost:8081/api/v1/promoBukus";

  constructor(private httpClient: HttpClient) { }

  getHargaPromo(bukuId: string): Observable<PromoBuku[]> {
    this.hargaPromo = `${this.baseUrl}/search/harga-promo?idBuku=${bukuId}`;
    return this.httpClient.get<GetResponseHarga>(this.hargaPromo).pipe(
      map(response  => response._embedded.hargaPromo)
    );
  }  
}

  interface GetResponseHarga {
    _embedded: {
      hargaPromo: PromoBuku[];
    }
  }


