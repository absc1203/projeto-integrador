import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos-diversos',
  templateUrl: './produtos-diversos.component.html',
  styleUrls: ['./produtos-diversos.component.css']
})
export class ProdutosDiversosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  listaProdutosDiv: Produto[]
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
    window.scroll(0,0)
   this.findAllProdutos()
  }

  findAllProdutos() {
    this.ProdutoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      this.listaProdutosDiv = this.listaProdutos.filter(element => element.categoria.id == 2)
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }


}
