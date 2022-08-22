import { Component, OnInit } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';
import { PembelianService } from "src/app/services/pembelian.service";
import { Router } from '@angular/router';
import { Pembelian } from 'src/app/common/pembelian';
import { DatePipe } from '@angular/common';
import { PembelianDetilService } from 'src/app/services/pembeliandetil.service';
import { BukuService } from 'src/app/services/buku.service';
import { Buku } from 'src/app/common/buku';
import { PembelianDetil } from 'src/app/common/pembelianDetil';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [DatePipe]
})

export class CheckoutComponent implements OnInit {

  pembelian: Pembelian = new Pembelian();
  pembelians: Pembelian[] = [];
  pembelianDetil: PembelianDetil = new PembelianDetil();
  buku: Buku = new Buku();
  
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;
  ngModel: NgModel;
  today: string;
  totalHargaBeli: number;
  myDate: Date;
  dateNow: string | null = "";
  runScript: boolean = true;
  proses: boolean = false;
  klikSimpan: boolean = false;
  cnt: number = 0;
  message: string = "";




  constructor(//private formBuilder: FormBuilder,
              private pembelianService: PembelianService,
              private pembelianDetilService: PembelianDetilService,
              private updateQtyStock: BukuService,
              private _cartService: CartService,
              private router: Router,
              private datePipe: DatePipe) {
               }
 

  ngOnInit() {
    this.cartDetails();
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.calculateTotalPrice();
  }
/*
  newPembelian(): void{
    this.pembelian = new Pembelian();
    //this.totalHargaBeli = this.pembelian.totalHargaBeli
  }
*/
  save() {
    this.pembelianService.createPembelian(this.pembelian).subscribe(data => {
      console.log(data)
      //this.pembelian = new Pembelian();
    }, 
    error => console.log(error));
  }

  getPembelianInfo(idPembelian: string){
    this.pembelianService.get(idPembelian).subscribe(
      data => {
        this.pembelians = data;
      }
    );
  }

  saveDetil() {
    console.log("try to save detil");
    this.pembelianDetilService.createPembelianDetil(this.cartItems).subscribe(data => {
      console.log(data)
      //this.pembelianDetil = new PembelianDetil();
    }, 
    error => console.log(error));
  }

  updateQty(){
    this.updateQtyStock.updateQuantityBuku(this.buku).subscribe( data => {
      console.log(data)
      this.buku = new Buku();
    },
    error => console.log(error));
  }
  randomId() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for ( var i = 0; i < 3; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  async onSubmit() {
    this.runScript = true;
    this.proses = false;
    this.klikSimpan = false;
    this.cnt = 0;
      //set id pembelian
    this.myDate = new Date();
    this.pembelian.id = "Trx-"+this.randomId()+"-"+this. datePipe. transform(this. myDate, 'yyyyMMddHHmmss');
    let idPembelian: string = this.pembelian.id;
    // assign idPembelian into cartItems
    for(var i in this.cartItems){
      this.cartItems[i].idPembelian = idPembelian;
    }
    //set total pembelian
    this.pembelian.totalHargaBeli = this.totalPrice;
    // set no transaksi
    this.dateNow = this. datePipe. transform(this. myDate, 'MMddHHmmss');
    this.pembelian.nomorTransaksi = Number(this.dateNow);
    this.save();    
    await new Promise(f => setTimeout(f, 1000));
    this.getPembelianInfo(idPembelian);
    while(this.runScript){
      this.klikSimpan = true;
      if(this.pembelians.length>0){
        this.runScript = false;
        this.proses = true;
        this.saveDetil();
        this.goToList();
      }else{
        this.cnt = this.cnt+1;
        if(this.cnt>=1 && this.cnt<5){
          //wait save into DB
          await new Promise(f => setTimeout(f, 1000));
        }else{
          console.log("Error Pembelian id: "+idPembelian);
          this.goToList();
          this.runScript = false;
        }
      }
    }
  }


  async goToList() {
    if(this.proses){
      this.router.navigate(['./checkout']);
      this.message="Sedang proses menyimpan data.. Mohon tunggu..";
      await new Promise(f => setTimeout(f, 2000));    
      this.message="Data berhasil disimpan.";
      window.location.href = './#';  
    }else{
      this.router.navigate(['./checkout']);
      this.message="Ada kesalahan dalam proses simpan data. Silakan dicoba lagi..";
    }
  }
  

}
