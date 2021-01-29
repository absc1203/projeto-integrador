package com.vit.VIT.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vit.VIT.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	
	public List<Categoria> findAllByCategoriaProdutoContainingIgnoreCase (String nome);

}
