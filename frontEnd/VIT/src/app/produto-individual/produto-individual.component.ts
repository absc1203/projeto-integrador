import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertsService } from '../service/alerts.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-individual',
  templateUrl: './produto-individual.component.html',
  styleUrls: ['./produto-individual.component.css']
})
export class ProdutoIndividualComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number
  seta: String = '▷'
  setaBaixo: String= "▽"
  setaDireita: String = '▷'


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=> {
      this.produto = resp
    })
  }

  setaTransicao(){
    if(this.seta == this.setaDireita)
      this.seta = this.setaBaixo
    else if(this.seta == this.setaBaixo)
      this.seta = this.setaDireita
  }

  comprarSubmit(){
    this.alert.showAlertSuccess('Compra realizada com sucesso!')
  }

}

