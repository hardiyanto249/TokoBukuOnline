import { Component, OnInit } from '@angular/core';
import { Buku } from 'src/app/common/buku';
import { BukuService } from 'src/app/services/buku.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  bukus: Buku[];
  uniqueKategori: any = [];

  constructor(private _bukuService: BukuService,) { }

  ngOnInit(): void {
    this.getKategori();
  }

  getKategori() {
    this._bukuService.getKategoriList()
      .subscribe(this.processResult())
  }

  processResult() {
    return (data: { 
                    _embedded: 
                      { 
                        bukus: Buku[]; 
                      }; 
                  }
            ) => {
                    this.bukus = data._embedded.bukus;
                    this.bukus.forEach(buku => {
                      if (this.uniqueKategori.indexOf(buku.kategori) === -1) {
                          this.uniqueKategori.push(buku.kategori);
                      }
                    });  
                  }
  }
}
