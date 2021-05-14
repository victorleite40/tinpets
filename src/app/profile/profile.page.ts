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

  public profileName: string;
  public profileIdentity: string;
  public profileMail: string;
  public profileAddress: string;


  constructor(public toastController: ToastController,
    private contactService: ProfileServiceService) { }

  ngOnInit() {
    if(this.perfil != null){
      
      this.profileName = this.perfil.profilename;
      this.profileIdentity = this.perfil.profileIdentity;
      this.profileMail = this.perfil.profileMail;
      this.profileAddress = this.perfil.profileAddress.rua;
    }
    else{
      this.profileName = "";
      this.profileIdentity = "531235123";
      this.profileMail = "fulano_de_tal@email.com";
      this.profileAddress = "Rua sei la onde";
    }
  }

  async handleClick() {
    //TODO: adicionar aviso na pagina qual item esta faltando preencher
    if (this.profileName && this.profileIdentity && this.profileMail && this.profileAddress) {
      console.log('profileName', this.profileName)
      console.log('profileIdentity', this.profileIdentity)
      console.log('profileMail', this.profileMail)
      console.log('profileAddress', this.profileAddress)
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
