import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastropessoaPage } from './cadastropessoa.page';

const routes: Routes = [
  {
    path: '',
    component: CadastropessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastropessoaPageRoutingModule {}
