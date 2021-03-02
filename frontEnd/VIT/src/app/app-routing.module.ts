import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { IndexComponent } from './index/index.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { ProdutoIndividualComponent } from './produto-individual/produto-individual.component';
import { ProdutosDiversosComponent } from './produtos-diversos/produtos-diversos.component';
import { ProdutosComponent } from './produtos/produtos.component';
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
  {path: 'produtos', component: ProdutosComponent},
  {path: 'politica-privacidade', component: PoliticaPrivacidadeComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'produto-individual', component: ProdutoIndividualComponent},
  {path: 'troca', component: TrocaComponent},
  {path: 'vit-menstrual', component: VitMenstrualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
