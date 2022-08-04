package com.sofco.book.springboot.model;

import com.sofco.book.springboot.entity.Buku;

public class CartItem {
	private String id;
	private String idBuku;
	private String judul;
	private String gambar;
	private Long harga;
	private int jumlahStok;
	private int realStock;
	
	public CartItem() {
	}
	public CartItem(Buku buku) {
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIdBuku() {
		return idBuku;
	}
	public void setIdBuku(String idBuku) {
		this.idBuku = idBuku;
	}
	public String getJudul() {
		return judul;
	}
	public void setJudul(String judul) {
		this.judul = judul;
	}
	public String getGambar() {
		return gambar;
	}
	public void setGambar(String gambar) {
		this.gambar = gambar;
	}
	public Long getHarga() {
		return harga;
	}
	public void setHarga(Long harga) {
		this.harga = harga;
	}
	public int getJumlahStok() {
		return jumlahStok;
	}
	public void setJumlahStok(int jumlahStok) {
		this.jumlahStok = jumlahStok;
	}
	public int getRealStock() {
		return realStock;
	}
	public void setRealStock(int realStock) {
		this.realStock = realStock;
	}

}
