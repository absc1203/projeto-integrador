import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    environment.token = ''
  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.id = this.usuarioLogin.id
      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.usuario = this.usuarioLogin.usuario
    },
      erro => {
        if (erro.status == 500) {
          alert('Usuário e/ou senha incorretos!')
        }
      })
  }


}
