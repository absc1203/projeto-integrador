import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-camiseta',
  templateUrl: './camiseta.component.html',
  styleUrls: ['./camiseta.component.css']
})
export class CamisetaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  tiposCategoria: string
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
 
  constructor(
    private router: Router,
    private ProdutoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.ProdutoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  cadastrar() {
    this.ProdutoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
    
      alert('Produto cadastrado com sucesso!')
      this.findAllProdutos()

      this.produto = new Produto()
    })
  }
}
