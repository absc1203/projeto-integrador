import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {
    if (this.usuario.senha != this.confirmarSenha) {
      this.alert.showAlertDanger('As senhas estão incorretas!')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => { this.usuario = resp })
      this.router.navigate(['/index'])
      this.alert.showAlertSuccess('Usuário cadastrado')
    }
  }

}
