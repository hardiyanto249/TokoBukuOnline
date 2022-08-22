import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Buku } from 'src/app/common/buku';
import { CartItem } from 'src/app/common/cart-item';
import { BukuService } from 'src/app/services/buku.service';
import { CartService } from 'src/app/services/cart.service';
import { PromoBukuService } from 'src/app/services/promobuku.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { PromoBuku } from 'src/app/common/promoBuku';
import { Kategori } from 'src/app/common/kategori';

@Component({
  selector: 'app-list-buku',
  templateUrl: './list-buku-border.component.html',
  styleUrls: ['./list-buku.component.css'],
  providers: [NgbPaginationConfig]
})
export class ListBukuComponent implements OnInit {

  bukus: Buku[] = [];
  promoBukus: PromoBuku[] = [];
  kategori: string = "";
  searchMode: boolean = false;
  pageOfItems: Array<Buku>;
  promoBuku: PromoBuku;
  uniqKategori: Kategori[] = [];

    //new properties for server-side paging
    currentPage: number = 1;
    pageSize: number = 10;
    totalRecords: number = 0;
  
  constructor(private _bukuService: BukuService,
              private _activatedRoute: ActivatedRoute,
              private _cartService: CartService,
              private _promoBukuService: PromoBukuService,
              private _hargaBukuService: PromoBukuService,
              config: NgbPaginationConfig) {
                config.boundaryLinks = true;
                config.maxSize = 3;
               }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listBuku();

    })
    
  }

  pageClick(pageOfItems: Array<Buku>){
    // update curr page
    this.pageOfItems = pageOfItems;
  }
  listBuku(){
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('judul');

    if(this.searchMode){
      //cari judul
      this.handleSearchJudul();
    }else {
      //cari kategori
      this.handleListKategori();
    }

    //let uniqKategori = this.bukus.filter((thing, i, arr) => arr.findIndex(t => t.kategori === thing.kategori) === i);
    //console.log("kategori ==>"+ uniqKategori)
  }

  handleListKategori(){
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('kategori');
    
    if (!hasCategoryId) {
      this.kategori = 'all';
    }else {
      this.kategori = ''+this._activatedRoute.snapshot.paramMap.get('kategori');
    }

    this._bukuService.getBooksList(this.kategori,
                                    this.currentPage - 1, 
                                    this.pageSize)
                                    .subscribe(this.processResult())
  }

  handleSearchJudul(){
      const judul: string = ''+this._activatedRoute.snapshot.paramMap.get('judul');
 
      this._bukuService.searchBuku(judul,
                                  this.currentPage - 1, 
                                  this.pageSize)
                                  .subscribe(this.processResult())
    }  
    addToCart(buku: Buku){
      console.log(`buku name: ${buku.judul}, and price: ${buku.harga}`);
      const cartItem = new CartItem(buku);
      this._cartService.addToCart(cartItem);
    }
    updatePageSize(pageSize: number) {
      this.pageSize = pageSize;
      this.currentPage = 1;
      this.listBuku();
    }  
    processResult(){
      return (data: { _embedded: { bukus: Buku[]; }; page: { number: number; totalElements: number; size: number; }; }) => {
        this.bukus = data._embedded.bukus;
        this.currentPage = data.page.number + 1;
        this.totalRecords = data.page.totalElements;
        this.pageSize = data.page.size;
      }
    }  
  }
