package com.sofco.book.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sofco.book.springboot.entity.Pembelian;
import com.sofco.book.springboot.repository.BeliRepository;

@Service
public class PembelianService {
	
	@Autowired
	private BeliRepository beliRepository;
	
	
	public Pembelian beli(Pembelian pembelian) {
		return beliRepository.save(pembelian);
	}
}
