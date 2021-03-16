import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertsService } from '../service/alerts.service';
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
  listaCamisetas: Produto[]
  tiposCategoria: string
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
 
  constructor(
    private router: Router,
    private ProdutoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.ProdutoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      this.listaCamisetas = this.listaProdutos.filter(element => element.categoria.id == 1)
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
    
      this.alert.showAlertSuccess('Produto cadastrado com sucesso!')
      this.findAllProdutos()

      this.produto = new Produto()
    })
  }
}
