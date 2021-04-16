import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPetsPageRoutingModule } from './saved-pets-routing.module';

import { SavedPetsPage } from './saved-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPetsPageRoutingModule
  ],
  declarations: [SavedPetsPage]
})
export class SavedPetsPageModule {}
