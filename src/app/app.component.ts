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

  ];
  
  public username: string;


  constructor (
    private storage: Storage,
    private profileService: ProfileServiceService) {
      
      
    }

    async ngOnInit() {
      console.log('1');
      await this.storage.create();
      console.log(this.storage);

      this.profileService.loadFromStorage();
      
      console.log('tt');
      console.log(this.profileService.perfil);
      if(this.profileService.perfil != null){
        this.username = this.profileService.perfil.user;
      }
    }
}
