package com.sofco.book.springboot.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sofco.book.springboot.entity.PromoBuku;


public interface PromoBukuRepository extends JpaRepository<PromoBuku, Long>{

	@RestResource(path="harga-promo")
	@Query("SELECT i FROM promo_buku i "
		 + "WHERE i.idBuku LIKE :idBuku and current_date >= i.tanggalAwal and "
		 + "      current_date <= i.tanggalAkhir")
	Page<PromoBuku> findByPromoBukuId(@Param("idBuku") String idBuku, Pageable pageable);

}
