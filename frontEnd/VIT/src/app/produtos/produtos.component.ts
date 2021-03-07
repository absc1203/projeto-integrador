import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  tiposCategoria: string
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  

  constructor(
    private router: Router,
    private ProdutoService: ProdutoService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/index'])
    }

    this.findAllProdutos()
  }

  findAllProdutos() {
    this.ProdutoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }



  cadastrar() {

    this.ProdutoService.postProdutos(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
    
      alert('Produto cadastrado com sucesso!')
      this.findAllProdutos()

      this.produto = new Produto()
    })
  }



}
