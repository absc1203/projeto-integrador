package com.vit.VIT.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name ="Usuario")

public class Usuario {
	@Id  //CHAVE PRIMARIA LIGA A CHAVE ESTRANGEIRA DE PRODUTO ID_CATEGORIA
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;	//CHAVE PRIMARIA

	//----------------------------------------------------
	@NotNull
	@Size(min =10,max=100)
	private String email;
	
	//----------------------------------------------------
	@NotNull
	@Size(min =8,max=18)
	private String senha;
	
	//----------------------------------------------------
	
	@NotNull
	@Size(min =10,max=80)
	private String nome_completo;
	
	
	//GET AND SET
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getNome_completo() {
		return nome_completo;
	}
	public void setNome_completo(String nome_completo) {
		this.nome_completo = nome_completo;
	}
	
	
	
	
}
