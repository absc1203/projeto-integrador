import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertsService } from 'src/app/service/alerts.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private alert: AlertsService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/index'])
    }

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  apagarCategoria(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(() =>{
      this.alert.showAlertSuccess('Categoria deletada com sucesso!')
      this.router.navigate(['/categoria'])
    })
  }
}
