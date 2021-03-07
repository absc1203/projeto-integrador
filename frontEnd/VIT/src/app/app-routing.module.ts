import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { IndexComponent } from './index/index.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { ProdutoIndividualComponent } from './produto-individual/produto-individual.component';
import { ProdutosDiversosComponent } from './produtos-diversos/produtos-diversos.component';
import { PropositoComponent } from './proposito/proposito.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { TrocaComponent } from './troca/troca.component';
import { VitMenstrualComponent } from './vit-menstrual/vit-menstrual.component';



const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path: 'index', component: IndexComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'carrinho', component: CarrinhoComponent },
  {path: 'contato', component: ContatoComponent},
  {path: 'produtos-diversos', component: ProdutosDiversosComponent},
  {path: 'proposito', component: PropositoComponent},
  {path: 'stakeholder', component: StakeholderComponent},
  {path: 'camiseta', component: CamisetaComponent},
  {path: 'politica-privacidade', component: PoliticaPrivacidadeComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'produto-individual/:id', component: ProdutoIndividualComponent},
  {path: 'troca', component: TrocaComponent},
  {path: 'vit-menstrual', component: VitMenstrualComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'produtos-edit/:id', component: ProdutosEditComponent},
  {path: 'produtos-delete/:id', component: ProdutosDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
