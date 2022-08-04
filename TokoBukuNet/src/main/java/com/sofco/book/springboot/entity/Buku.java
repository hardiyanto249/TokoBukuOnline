package com.sofco.book.springboot.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

@Entity(name="buku")
@Table(name="buku", schema = "public")
@DynamicUpdate
public class Buku {
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "ID")
	private String id;
	
	@Column(updatable = false)
	private String judul;
	
	@Column(updatable = false)
	private String kategori;
	
	@Column(updatable = false)
	private int harga;
	
	@Column(updatable = false)
	private String penulis;
	
	@Column(updatable = false)
	private String penerbit;
	
	@Column(name="jumlah_stok", updatable = true)
	private int jumlahStok;
	
	@Column(updatable = false)
	private String sinopsis;
	
	@Column(updatable = false)
	private String gambar;
	
	@Column(updatable = false)
	private boolean aktif;
	/*
	@OneToMany(cascade=CascadeType.ALL, mappedBy="buku")
	private Set<PromoBuku> promoBuku;
	*/
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getJudul() {
		return judul;
	}

	public void setJudul(String judul) {
		this.judul = judul;
	}

	public String getKategori() {
		return kategori;
	}

	public void setKategori(String kategori) {
		this.kategori = kategori;
	}

	public int getHarga() {
		return harga;
	}

	public void setHarga(int harga) {
		this.harga = harga;
	}

	public String getPenulis() {
		return penulis;
	}

	public void setPenulis(String penulis) {
		this.penulis = penulis;
	}

	public String getPenerbit() {
		return penerbit;
	}

	public void setPenerbit(String penerbit) {
		this.penerbit = penerbit;
	}

	public int getJumlahStok() {
		return jumlahStok;
	}

	public void setJumlahStok(int jumlahStok) {
		this.jumlahStok = jumlahStok;
	}

	public String getSinopsis() {
		return sinopsis;
	}

	public void setSinopsis(String sinopsis) {
		this.sinopsis = sinopsis;
	}

	public String getGambar() {
		return gambar;
	}

	public void setGambar(String gambar) {
		this.gambar = gambar;
	}

	public boolean isAktif() {
		return aktif;
	}

	public void setAktif(boolean aktif) {
		this.aktif = aktif;
	}
}
