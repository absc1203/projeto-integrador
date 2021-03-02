import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
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
  idUsuario = environment.id
  idCategoria: number
  usuario: Usuario = new Usuario()


  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private authService: AuthService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/index'])
    }

    // this.getAllProduto()
  }}

  // getAllProduto() {
  //   this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
  //     this.listaProdutos = resp
  //   })
  // }

  // findByIdCategoria() {
  //   this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
  //     this.categoria = resp
  //   })
  // }

  // getAllCategorias() {
  //   this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
  //     this.listaCategorias
  //   })
  // }


  // cadastroProduto() {
  //   this.usuario.id = this.idUsuario
  //   this.produto.usuario = this.usuario

  //   this.produtoService.postProdutos(this.produto).subscribe((resp: Produto) => {
  //     this.produto = resp

  //     alert('Produto cadastrado com sucesso!')
  //     this.produto = new Produto()
  //     this.getAllProduto()
  //   })
  // }

