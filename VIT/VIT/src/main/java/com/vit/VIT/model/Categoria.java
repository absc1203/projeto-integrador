package com.vit.VIT.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name ="Categoria")


public class Categoria {
	@Id  //CHAVE PRIMARIA LIGA A CHAVE ESTRANGEIRA DE PRODUTO ID_CATEGORIA
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToMany(mappedBy = "categoria",cascade = CascadeType.ALL )
	@JsonIgnoreProperties("categoria")
	private List<Produto> produto;
	
	
	//----------------------------------------------------
	@NotNull
	@Size(min =5,max=255)
	private String categoriaProduto;
	
	//GET AND SET
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCategoriaProduto() {
		return categoriaProduto;
	}
	public void setCategoriaProduto(String categoriaProduto) {
		this.categoriaProduto = categoriaProduto;
	}
}
