import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PropositoComponent } from './proposito/proposito.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { VitMenstrualComponent } from './vit-menstrual/vit-menstrual.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
import { ProdutosDiversosComponent } from './produtos-diversos/produtos-diversos.component';
import { IndexComponent } from './index/index.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoIndividualComponent } from './produto-individual/produto-individual.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { TrocaComponent } from './troca/troca.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { AlertComponent } from './alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';




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
    VitMenstrualComponent,
    CamisetaComponent,
    ProdutosDiversosComponent,
    IndexComponent,
    ProdutoIndividualComponent,
    TrocaComponent,
    PoliticaPrivacidadeComponent,
    PagamentoComponent,
    CadastroProdutoComponent,
    VitMenstrualComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutosEditComponent,
    ProdutosDeleteComponent,
    CadastroProdutoComponent,
    AlertComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
