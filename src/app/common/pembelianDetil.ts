export class PembelianDetil {
    id: string;
    idPembelian: string | null;
    idBuku: string | null;
    qty: number;
    harga: number;
    subTotal: number;

    constructor(){
        this.id = "";
        this.idPembelian = "";
        this.idBuku = "";
        this.qty = 0;
        this.harga = 0;
        this.subTotal = 0;
    }
}
