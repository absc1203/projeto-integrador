import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  tiposCategoria: string
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/index'])

    }

    this.getAllProdutos()
    this.getAllCategorias()
  }

  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }


  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  cadastrar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp

      alert('Produto cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new Produto()
    })
  }
}


