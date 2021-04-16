import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
<<<<<<< HEAD
    path: 'cadastropessoa',
    loadChildren: () => import('./cadastropessoa/cadastropessoa.module').then( m => m.CadastropessoaPageModule)
=======
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'pet-register',
    loadChildren: () => import('./pet-register/pet-register.module').then( m => m.PetRegisterPageModule)
>>>>>>> be8685b112688a44b784696a529604660d0c8008
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
