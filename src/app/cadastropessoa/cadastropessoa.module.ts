import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastropessoaPageRoutingModule } from './cadastropessoa-routing.module';

import { CadastropessoaPage } from './cadastropessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastropessoaPageRoutingModule
  ],
  declarations: [CadastropessoaPage]
})
export class CadastropessoaPageModule {}
