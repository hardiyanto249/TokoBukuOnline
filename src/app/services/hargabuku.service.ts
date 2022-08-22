import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from "rxjs";
import { PromoBuku } from 'src/app/common/promoBuku';

@Injectable({
  providedIn: 'root'
})
export class HargabukuService {

  private promoUrl = 'http://localhost:8081/api/v1/promoBukus';

  constructor(private httpClient: HttpClient) { }

  getHargaPromo(idBuku: string): Observable<PromoBuku[]> {
    
    // search url
    const hargaPromoUrl = `${this.promoUrl}/search/harga-promo?idBuku=${idBuku}`;

    return this.httpClient.get<GetResponsePromo>(hargaPromoUrl).pipe(
      map(response => response._embedded.promoBukus)
    );
  }

}

interface GetResponsePromo {
  _embedded: {
    promoBukus: PromoBuku[];
  },
  page: {
  }
}
