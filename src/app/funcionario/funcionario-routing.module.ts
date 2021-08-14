import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
  {
    path: '', component: FuncionarioComponent, children: [
      { path: 'cadastrar', component: FuncionarioCadastroComponent },
      { path: 'atualizar/:id', component: FuncionarioCadastroComponent },
      { path: 'detalhe/:id', component: FuncionarioDetalheComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
