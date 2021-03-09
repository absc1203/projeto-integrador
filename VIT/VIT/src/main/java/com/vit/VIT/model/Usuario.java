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
	@Size(min =3,max=100)
	private String usuario;
	
	//----------------------------------------------------
	@NotNull
	@Size(min =6,max=255)
	private String senha;
	
	//----------------------------------------------------
	
	@NotNull
	@Size(min =3,max=80)
	private String nome;
	
	
	//GET AND SET
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome_completo) {
		this.nome = nome_completo;
	}
	
	
	
	
}
