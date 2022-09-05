package com.sofco.book.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sofco.book.springboot.entity.Buku;
import com.sofco.book.springboot.repository.BukuRepository;

@Service
public class BukuService {
	@Autowired
	private BukuRepository bukuRepository;
	
	public Buku updateStok(Buku buku) {
		return 	bukuRepository.save(buku);
	}
	



}
