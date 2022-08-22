import { Buku } from './buku';
import { PromoBuku } from './promoBuku';

export class CartItemPromo {
    id: string;
    idBuku: string;
    judul: string;
    gambar: string;
    harga: number;
    jumlahStok: number;
    realStock: number

    constructor(buku: Buku, promos: PromoBuku){
        this.id = "";
        this.idBuku = buku.id;
        this.judul = buku.judul;
        this.gambar = buku.gambar;
        this.harga = promos.hargaPromo;
        this.jumlahStok = 1;
        this.realStock = buku.jumlahStok;
    }
}
