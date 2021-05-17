import { Component, OnInit } from '@angular/core';
import { Profile, ProfileServiceService } from './service/profile-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  
  public appPages = [ 

    { title: 'Início', url: 'main', icon: 'home' },  
    { title: 'Perfil', url: 'profile', icon: 'person' },  
    { title: 'Salvos', url: 'saved-pets', icon: 'heart' }, 
    { title: 'Novo Pet', url: 'pet-register', icon: 'paw' }, 
    { title: 'Configurações', url: 'cadastropesssoa', icon: 'settings' },
    { title: 'Sair', url: 'login', icon: 'log-out' },


  ];
  
   


  constructor (
    private storage: Storage,
    private profileService: ProfileServiceService) {
      
      
    }

    async ngOnInit() {
       
      await this.storage.create();
       

      this.profileService.loadFromStorage();
      
        
    }
}
