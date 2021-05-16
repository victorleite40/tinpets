import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Profile, ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public perfil: Profile;

  
  constructor(public toastController: ToastController,
    private profileService: ProfileServiceService,
    private storage: Storage) { }

  ngOnInit() {
    this.perfil = this.profileService.GetProfile();
    // if(this.perfil != null){
 
    // }
    // else{
    //   this.profileName = "";
    //   this.profileIdentity = "531235123";
    //   this.profileMail = "fulano_de_tal@email.com";
    //   this.profileAddress = "Rua sei la onde";
    // }
  }

  async handleClick() {
    //TODO: adicionar aviso na pagina qual item esta faltando preencher
    if (this.perfil.user && this.perfil.profileIdentity && this.perfil.profileMail && this.perfil.profileAddress) {
      console.log('profileName', this.perfil.profilename)
      console.log('profileIdentity', this.perfil.profileIdentity)
      console.log('profileMail', this.perfil.profileMail)
      console.log('profileAddress', this.perfil.profileAddress)
      
      this.profileService.updateContact(this.perfil.user, this.perfil);

      const toast = await this.toastController.create({
        message: 'Seu perfil foi atualaizado com sucesso.',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Esta faltando informaçoes do seu perfil.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }
}
