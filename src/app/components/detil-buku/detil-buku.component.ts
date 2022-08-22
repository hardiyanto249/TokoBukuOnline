import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Buku } from 'src/app/common/buku';
import { CartItem } from 'src/app/common/cart-item';
import { BukuService } from 'src/app/services/buku.service';
import { PromoBukuService } from 'src/app/services/promobuku.service';
import { HargabukuService } from 'src/app/services/hargabuku.service';
import { CartService } from 'src/app/services/cart.service';
import { PromoBuku } from 'src/app/common/promoBuku';
import { CartItemPromo } from 'src/app/common/cart-item-promo';

@Component({
  selector: 'app-detil-buku',
  templateUrl: './detil-buku.component.html',
  styleUrls: ['./detil-buku.component.css']
})
export class DetilBukuComponent implements OnInit {

  bukus: Buku[] = [];
  promoBukus: PromoBuku[] = [];
  idBuku:string;
  hargaPromo:any;
  dataHarga1:number;
  dataHarga2:number;
  promos: PromoBuku;
  kategori: string;

  constructor(private _activatedRoute: ActivatedRoute,
                  private _bookService: BukuService,
                  private _cartService: CartService,
                  private _promoBukuService: PromoBukuService,
                  private _hargaBukuService: HargabukuService) { }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      () => {
        this.getBukuInfo();
        this.getBukuPromo();
      }
    )
  }

  getBukuInfo(){
    const id: string = ''+this._activatedRoute.snapshot.paramMap.get('id');
    const kategori: string = ''+this._activatedRoute.snapshot.paramMap.getAll('kategori');

    this._bookService.get(id).subscribe(
      data => {
        this.bukus = data;
      }
    );
  }

  getBukuPromo(){
    const id: string = ''+this._activatedRoute.snapshot.paramMap.get('id');
    this._hargaBukuService.getHargaPromo(id).subscribe(
      data => {
        this.promoBukus = data;
      }
    );
  }

  addToCartPromo(buku: Buku, promobuku: PromoBuku){
    console.log(`buku name: ${buku.judul}, and price: ${buku.harga}, and stock: ${buku.jumlahStok}`);
    const cartItemPromo = new CartItemPromo(buku,promobuku);
    const cartItem = new CartItem(buku);
    cartItem.harga = cartItemPromo.harga;
    this._cartService.addToCart(cartItem);
  }

  addToCart(buku: Buku){
    console.log(`buku name: ${buku.judul}, and price: ${buku.harga}, and stock: ${buku.jumlahStok}`);
    const cartItem = new CartItem(buku);
    this._cartService.addToCart(cartItem);
  }

  /*
  getHargaPromo(idBuku: string){
    this._promoBukuService.getHargaPromo(idBuku).subscribe(data => {
      console.log(data)
      this.promoBuku = new PromoBuku();
    }, 
    error => console.log(error));
  }
  */


}
