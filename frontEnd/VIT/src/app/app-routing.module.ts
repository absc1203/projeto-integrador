import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraIndividualComponent } from './compra-individual/compra-individual.component';
import { ContatoComponent } from './contato/contato.component';
import { IndexComponent } from './index/index.component';
import { ProdutosDiversosComponent } from './produtos-diversos/produtos-diversos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PropositoComponent } from './proposito/proposito.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';



const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path: 'index', component: IndexComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'carrinho', component: CarrinhoComponent },
  {path: 'compra-individual', component: CompraIndividualComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'produtos-diversos', component: ProdutosDiversosComponent},
  {path: 'proposito', component: PropositoComponent},
  {path: 'stakeholder', component: StakeholderComponent},
  {path: 'camiseta', component: CamisetaComponent},
  {path: 'produtos', component: ProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
