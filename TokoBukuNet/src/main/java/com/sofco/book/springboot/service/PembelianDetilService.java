package com.sofco.book.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sofco.book.springboot.entity.PembelianDetilItem;
import com.sofco.book.springboot.repository.BeliDetilRepository;
import com.sofco.book.springboot.repository.BeliRepository;

@Service
public class PembelianDetilService {
		
	@Autowired
	private BeliDetilRepository beliDetilRepository;
	
	public PembelianDetilItem beliDetil(PembelianDetilItem beliDetil) {
		return beliDetilRepository.save(beliDetil);
		
	}
	
}
