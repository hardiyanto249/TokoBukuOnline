package com.sofco.book.springboot.entity;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.ToString;


@Entity(name="Pembelian")
@Table(name="Pembelian", schema = "public")
@ToString
public class Pembelian {
	@Id
	private String id;
	
	@Column(name = "nomor_transaksi")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long nomorTransaksi;
	
	
	@Column(name = "tanggal_transaksi", nullable = false, updatable = false)
	@CreationTimestamp	
	private Date tanggalTransaksi;
	
	@Column(name = "nama_pembeli")
	private String namaPembeli;
	
	@Column(name = "email_pembeli")
	private String emailPembeli;
	
	@Column(name = "no_hp_pembeli")
	private String noHpPembeli;
	
	@Column(name = "alamat_pembeli")
	private String alamatPembeli;
	
	@Column(name = "total_harga_beli")
	private int totalHargaBeli;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Long getNomorTransaksi() {
		return nomorTransaksi;
	}

	public void setNomorTransaksi(Long nomorTransaksi) {
		this.nomorTransaksi = nomorTransaksi;
	}

	public Date getTanggalTransaksi() {
		return tanggalTransaksi;
	}

	public void setTanggalTransaksi(Date tanggalTransaksi) {
		this.tanggalTransaksi = tanggalTransaksi;
	}

	public String getNamaPembeli() {
		return namaPembeli;
	}

	public void setNamaPembeli(String namaPembeli) {
		this.namaPembeli = namaPembeli;
	}

	public String getEmailPembeli() {
		return emailPembeli;
	}

	public void setEmailPembeli(String emailPembeli) {
		this.emailPembeli = emailPembeli;
	}

	public String getNoHpPembeli() {
		return noHpPembeli;
	}

	public void setNoHpPembeli(String noHpPembeli) {
		this.noHpPembeli = noHpPembeli;
	}

	public String getAlamatPembeli() {
		return alamatPembeli;
	}

	public void setAlamatPembeli(String alamatPembeli) {
		this.alamatPembeli = alamatPembeli;
	}

	public int getTotalHargaBeli() {
		return totalHargaBeli;
	}

	public void setTotalHargaBeli(int totalHargaBeli) {
		this.totalHargaBeli = totalHargaBeli;
	}

}
