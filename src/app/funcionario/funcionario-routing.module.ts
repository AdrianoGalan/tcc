import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
  
      { path: '', component: FuncionarioComponent}, 
      { path: 'cadastrar', component: FuncionarioCadastroComponent },
      { path: 'atualizar/:id', component: FuncionarioCadastroComponent }
    
    
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
