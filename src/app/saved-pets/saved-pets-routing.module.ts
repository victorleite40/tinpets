import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedPetsPage } from './saved-pets.page';

const routes: Routes = [
  {
    path: '',
    component: SavedPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedPetsPageRoutingModule {}
