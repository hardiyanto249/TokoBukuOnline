package com.sofco.book.springboot.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity(name="promo_buku")
@Table(name="promo_buku", schema = "public")
public class PromoBuku {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="harga_promo")
	private int hargaPromo;
	
	@Column(name="tanggal_awal")
	private Date tanggalAwal;
	
	@Column(name="tanggal_akhir")
	private Date tanggalAkhir;
	
	@Column(name="id_buku")
	private String idBuku;
	/*
	@ManyToOne
	@JoinColumn(name="id_buku", nullable=true)
	private Set<Buku> buku;
    */
	public String getIdBuku() {
		return idBuku;
	}

	public void setIdBuku(String idBuku) {
		this.idBuku = idBuku;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getHargaPromo() {
		return hargaPromo;
	}

	public void setHargaPromo(int hargaPromo) {
		this.hargaPromo = hargaPromo;
	}

	public Date getTanggalAwal() {
		return tanggalAwal;
	}

	public void setTanggalAwal(Date tanggalAwal) {
		this.tanggalAwal = tanggalAwal;
	}

	public Date getTanggalAkhir() {
		return tanggalAkhir;
	}

	public void setTanggalAkhir(Date tanggalAkhir) {
		this.tanggalAkhir = tanggalAkhir;
	}

}
