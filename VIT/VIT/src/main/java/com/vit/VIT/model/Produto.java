package com.vit.VIT.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name ="Produto")


public class Produto {

	@Id	//CHAVE PRIMARIA
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	//----------------------------------------------------
	@NotNull
	@Size(min =10,max=255)
	private String nomeProduto;
	
	
	//--------------------------------------------------
	@NotNull
	@Size(min =10,max=255)
	private String descricaoProduto;
	
	
	//---------------------------------------------------
	@NotNull
	private double precoProduto;
	
	//---------------------------------------------------
	@NotNull
	private int qtProduto;
	
	//---------------------------------------------------
	//private blob IMAGEM
	@NotNull
	@Size(min =10,max=255)
	private String imgProduto;
	
	//---------------------------------------------------
	@ManyToOne
	@JsonIgnoreProperties("categoria")
	private Categoria categoria;

	
	//CHAVE ESTRANGEIRA
	
	//GET AND SET
	//---------------------------------------------------
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	//---------------------------------------------------
	public String getNomeProduto() {
		return nomeProduto;
	}
	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}
	//---------------------------------------------------
	public String getDescricaoProduto() {
		return descricaoProduto;
	}
	public void setDescricaoProduto(String descricaoProduto) {
		this.descricaoProduto = descricaoProduto;
	}
	//---------------------------------------------------
	public double getPrecoProduto() {
		return precoProduto;
	}
	public void setPrecoProduto(double precoProduto) {
		this.precoProduto = precoProduto;
	}
	//---------------------------------------------------
	public int getQtProduto() {
		return qtProduto;
	}
	public void setQtProduto(int qtProduto) {
		this.qtProduto = qtProduto;
	}
	//---------------------------------------------------
	
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	//---------------------------------------------------
	public String getImgProduto() {
		return imgProduto;
	}
	
	public void setImgProduto(String imgProduto) {
		this.imgProduto = imgProduto;
	}
	//---------------------------------------------------
	
	
	
	
	
	
	
}
