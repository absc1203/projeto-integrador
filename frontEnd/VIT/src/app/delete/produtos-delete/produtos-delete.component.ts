import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['index'])
    }

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  apagarProduto(){
    this.produtoService.deleteProduto (this.idProduto). subscribe (() => {
      alert('Produto deletado com sucesso!')
      this.router.navigate(['cadastro-produto'])
    })
  }
}
