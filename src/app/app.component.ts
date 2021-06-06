import { Component, OnInit } from '@angular/core';
import { Profile, ProfileServiceService } from './service/profile-service.service';
import { Storage } from '@ionic/storage';
import { PetService } from './service/pet.service';

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
    { title: 'Novo Pet', url: 'pet-register', icon: 'add' }, 
    { title: 'Meus Pets', url: 'mypets', icon: 'paw' },
    { title: 'Sair', url: 'login', icon: 'log-out' },


  ];
  
   


  constructor (
    private storage: Storage,
    private profileService: ProfileServiceService,
    private animalService: PetService) {
      
      
    }

    async ngOnInit() {
       
      await this.storage.create();
       

      this.profileService.loadFromStorage();
      this.animalService.loadFromStorage();
        
    }
}
