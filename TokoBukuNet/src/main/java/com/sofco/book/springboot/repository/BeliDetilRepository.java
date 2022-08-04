package com.sofco.book.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sofco.book.springboot.entity.PembelianDetilItem;


public interface BeliDetilRepository extends JpaRepository<PembelianDetilItem, String>{

}
