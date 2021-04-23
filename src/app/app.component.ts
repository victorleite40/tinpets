import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [ 

    { title: 'Início', url: 'main', icon: 'home' },  
    { title: 'Perfil', url: 'profile', icon: 'person' },  
    { title: 'Salvos', url: 'saved-pets', icon: 'heart' }, 
    { title: 'Novo Pet', url: 'pet-register', icon: 'paw' }, 
    { title: 'Configurações', url: 'cadastropesssoa', icon: 'settings' },

  ];
   
  constructor() {}
}
