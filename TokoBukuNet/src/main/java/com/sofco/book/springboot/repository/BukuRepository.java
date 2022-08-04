package com.sofco.book.springboot.repository;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.sofco.book.springboot.entity.Buku;


public interface BukuRepository extends JpaRepository<Buku, String>{
	
	@RestResource(path="id")
	@Query("SELECT i FROM buku i where i.id LIKE :id and i.aktif = true")
	Page<Buku> findByBukuIdAndAktifContaining(@Param("id") String id, Pageable pageable);
	
	@RestResource(path="allbuku")
	@Query("select a from buku a left join promo_buku pb"
		+  " on a.id = pb.idBuku and current_date >= pb.tanggalAwal "
		+  " and current_date <= pb.tanggalAkhir "
		+  "where a.kategori LIKE '%%' and a.aktif=true "
		+  "order by pb.idBuku")
	Page<Buku> findByBukuAktifContaining(@Param("kategori") String kategori, Pageable pageable);
	
	@RestResource(path="kategori")
	@Query("select a from buku a left join promo_buku pb"
		+  " on a.id = pb.idBuku and current_date >= pb.tanggalAwal "
		+  " and current_date <= pb.tanggalAkhir "
		+  "where a.kategori LIKE :kategori and a.aktif=true "
		+  "order by pb.idBuku")
	Page<Buku> findByBukuKategoriAndAktifContaining(@Param("kategori") String kategori, Pageable pageable);
	
	@RestResource(path="judul")
	@Query("select a from buku a left join promo_buku pb"
			+  " on a.id = pb.idBuku and current_date >= pb.tanggalAwal "
			+  " and current_date < pb.tanggalAkhir "
			+  "where lower(a.judul) LIKE lower(concat('%', :judul,'%')) and a.aktif=true "
			+  "order by pb.idBuku")
	Page<Buku> findByBukuJudulContainingIgnoreCase(@Param("judul") String judul, Pageable pageable);
	
}
