import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PetService, Animal} from '../service/pet.service';
import { Storage } from '@ionic/storage';
import { ProfileServiceService } from '../service/profile-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.page.html',
  styleUrls: ['./pet-register.page.scss'],
})
export class PetRegisterPage implements OnInit {
 

  public newPet: Animal = {} as Animal;
public alteracao: boolean;
  


  async clickFunc() {
    console.log(this.newPet.urlphoto)

    
    if (this.newPet.petName && this.newPet.petType && this.newPet.petSex && this.newPet.petSize && this.newPet.petAge) {
      let text='';
      if(this.petService.animal != null){
        this.petService.updateContact(this.userService.perfil.user, this.newPet);
        this.petService.animal = null;
        text = 'alterado';
      }
      else{
        this.newPet.petUser = this.userService.perfil.user;
        this.petService.AddAnimal(this.newPet);
        text = 'cadastrado';
      }
      const toast = await this.toastController.create({
        message: 'Seu pet foi ' + text + ' com sucesso.',
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
    this.router.navigateByUrl('/main');
  }
  
  constructor(public toastController: ToastController,
    public petService: PetService,
    private userService: ProfileServiceService,
    private storage: Storage,
    private router: Router) {

      this.petService.loadFromStorage();
  }
  
  ngOnInit() {
     if(this.petService.animal.petName != null){
       this.newPet = this.petService.animal;
       this.alteracao = true;
        
     }
  }

}
