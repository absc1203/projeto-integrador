import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertsService } from 'src/app/service/alerts.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/index'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  atualizarCategoria(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      this.alert.showAlertSuccess('Categoria atualizada!')
      this.router.navigate(['/categoria'])
    })
  }
}
