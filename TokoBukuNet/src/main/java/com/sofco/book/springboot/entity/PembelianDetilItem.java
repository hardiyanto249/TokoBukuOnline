package com.sofco.book.springboot.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity(name="pembelian_detil_item")
@Table(name="pembelian_detil_item", schema = "public")
public class PembelianDetilItem {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "ID")
	private String id;
	
	@Column(name = "id_pembelian")
	private String idPembelian;
	
	@Column(name = "id_buku")
	private String idBuku;
	
	private int qty;
	
	private Long harga;
	
	@Column(name = "sub_total")
	private Long subTotal;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getIdPembelian() {
		return idPembelian;
	}

	public void setIdPembelian(String idPembelian) {
		this.idPembelian = idPembelian;
	}

	public String getIdBuku() {
		return idBuku;
	}

	public void setIdBuku(String idBuku) {
		this.idBuku = idBuku;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Long getHarga() {
		return harga;
	}

	public void setHarga(Long harga) {
		this.harga = harga;
	}

	public Long getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(long subTotal) {
		this.subTotal = subTotal;
	}
	
}
