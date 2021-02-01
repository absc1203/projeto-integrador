package com.vit.VIT.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vit.VIT.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Long>{
	public List <Produto> findAllByNomeProdutoContainingIgnoreCase(String nomeProduto);
}
