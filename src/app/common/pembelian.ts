export class Pembelian {
    id: string;
    nomorTransaksi: number | null;
    tanggalTransaksi: string | null;
    namaPembeli: string;
    emailPembeli: string;
    noHpPembeli: string;
    alamatPembeli: string;
    totalHargaBeli: number;

    constructor(){
        this.id = "";
        this.nomorTransaksi = 0;
        this.tanggalTransaksi = "";
        this.namaPembeli = "";
        this.emailPembeli = "";
        this.noHpPembeli = "";
        this.alamatPembeli = "";
        this.totalHargaBeli = 0;
    }
}
