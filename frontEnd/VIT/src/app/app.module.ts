import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PropositoComponent } from './proposito/proposito.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraIndividualComponent } from './compra-individual/compra-individual.component';
import { VitMenstrualComponent } from './vit-menstrual/vit-menstrual.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
import { ProdutosDiversosComponent } from './produtos-diversos/produtos-diversos.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PropositoComponent,
    StakeholderComponent,
    ContatoComponent,
    CadastroComponent,
    CarrinhoComponent,
    CompraIndividualComponent,
    VitMenstrualComponent,
    CamisetaComponent,
    ProdutosDiversosComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
