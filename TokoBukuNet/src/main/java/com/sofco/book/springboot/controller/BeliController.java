package com.sofco.book.springboot.controller;

import java.lang.reflect.Array;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sofco.book.springboot.model.CartItem;
import com.sofco.book.springboot.entity.Buku;
import com.sofco.book.springboot.entity.Pembelian;
import com.sofco.book.springboot.entity.PembelianDetilItem;
import com.sofco.book.springboot.repository.BeliDetilRepository;
import com.sofco.book.springboot.repository.BeliRepository;
import com.sofco.book.springboot.repository.BukuRepository;
import com.sofco.book.springboot.service.BukuService;
import com.sofco.book.springboot.service.PembelianDetilService;
import com.sofco.book.springboot.service.PembelianService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class BeliController {
	
	private String idPembelian="";
/*
	@Autowired
	private BukuRepository bukuRepository;
	
	@Autowired
	private BeliRepository beliRepository;

	@Autowired
	private BeliDetilRepository belidetilRepository;
*/	
	@Autowired
	private PembelianService beliService;
	
	@Autowired
	private PembelianDetilService beliDetilService;
	
	@Autowired
	private BukuService bukuService;
		
	@PostMapping("/pembelian")
	public Pembelian infoPembelian(@RequestBody Pembelian pembelian) {
		idPembelian = pembelian.getId();
		return beliService.beli(pembelian);
	}

	@PostMapping("/cartdetil")
	public void infoCartDetil(@RequestBody CartItem[] cartItem) {
		PembelianDetilItem detil = new PembelianDetilItem();
		Buku buku = new Buku();
		int id=0;
		for(int i=0;i<cartItem.length;i++) {
			// insert pembelian detail
			detil.setId(String.valueOf(id+1));
			detil.setIdPembelian(cartItem[i].getIdPembelian());
			detil.setIdBuku(cartItem[i].getIdBuku());
			detil.setQty(cartItem[i].getJumlahStok());
			detil.setHarga(cartItem[i].getHarga());
			detil.setSubTotal((cartItem[i].getHarga()*cartItem[i].getJumlahStok()));
			beliDetilService.beliDetil(detil);
			
			// update stok buku
			buku.setId(cartItem[i].getIdBuku());
			int jumlahStok = cartItem[i].getRealStock() - cartItem[i].getJumlahStok();
			buku.setJumlahStok(jumlahStok);
			bukuService.updateStok(buku);
		}
		
	}	
}
