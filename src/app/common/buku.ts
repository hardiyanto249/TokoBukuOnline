export class Buku {
    id: string;
    judul: string;
    kategori: string;
    harga: number;
    penulis: string;
    penerbit: string;
    jumlahStok: number;
    sinopsis: string;
    gambar: string;
    aktif: boolean;    

    constructor(){
        this.id = "";
        this.judul = "";
        this.kategori = "";
        this.harga = 0;
        this.penulis = "";
        this.penerbit = "";
        this.jumlahStok = 0;
        this.sinopsis = "";
        this.gambar = "";
        this.aktif = true;
    }
}
