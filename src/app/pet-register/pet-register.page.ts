import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PetService, Animal} from '../service/pet.service';
import { Storage } from '@ionic/storage';
import { ProfileServiceService } from '../service/profile-service.service';


@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.page.html',
  styleUrls: ['./pet-register.page.scss'],
})
export class PetRegisterPage implements OnInit {
 

  public newPet: Animal = {} as Animal;

  


  async clickFunc() {
    console.log(this.newPet.urlphoto)


    if (this.newPet.petName && this.newPet.petType && this.newPet.petSex && this.newPet.petSize && this.newPet.petAge) {
 

      this.newPet.petUser = this.userService.perfil.user;
      this.petService.AddAnimal(this.newPet);
      const toast = await this.toastController.create({
        message: 'Seu pet foi cadastrado com sucesso.',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
      this.newPet.petName = '';
      this.newPet.petType = '';
      this.newPet.petSex = '';
      this.newPet.petSize = '';
      this.newPet.petAge = '';
    }else {
      const toast = await this.toastController.create({
        message: 'Esta faltando informaçoes para completar o cadastro do seu pet.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }
  
  constructor(public toastController: ToastController,
    public petService: PetService,
    private userService: ProfileServiceService,
    private storage: Storage) {

      this.petService.loadFromStorage();
  }
  
  ngOnInit() {
     
  }

}
