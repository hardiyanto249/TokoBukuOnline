import { Buku } from './buku';
import { PromoBuku } from './promoBuku';

export class CartItem {
    id: string;
    idBuku: string;
    idPembelian: string;
    judul: string;
    gambar: string;
    harga: number;
    jumlahStok: number;
    realStock: number

    constructor(buku: Buku){
        this.id = "";
        this.idBuku = buku.id;
        this.idPembelian = "";
        this.judul = buku.judul;
        this.gambar = buku.gambar;
        this.harga = buku.harga;
        this.jumlahStok = 1;
        this.realStock = buku.jumlahStok;
    }
}
