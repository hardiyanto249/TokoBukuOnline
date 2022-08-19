package com.sofco.book.springboot.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sofco.book.springboot.entity.Buku;
import com.sofco.book.springboot.entity.Pembelian;


public interface BeliRepository extends JpaRepository<Pembelian, String> {
	@RestResource(path="id")
	@Query("SELECT i FROM Pembelian i where i.id LIKE :idPembelian")
	Page<Pembelian> findByPembelianId(@Param("idPembelian") String idPembelian, Pageable pageable);	
}
