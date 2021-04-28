import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastropessoa',
    loadChildren: () => import('./cadastropessoa/cadastropessoa.module').then( m => m.CadastropessoaPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'pet-register',
    loadChildren: () => import('./pet-register/pet-register.module').then( m => m.PetRegisterPageModule)
  },
  {
    path: 'saved-pets',
    loadChildren: () => import('./saved-pets/saved-pets.module').then( m => m.SavedPetsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'recuperarsenha',
    loadChildren: () => import('./recuperarsenha/recuperarsenha.module').then( m => m.RecuperarsenhaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
