import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Profile, ProfileServiceService } from '../service/profile-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public perfil: Profile;
  public states: any;
  public cities: any;

  constructor(public toastController: ToastController,
    private profileService: ProfileServiceService,
    private storage: Storage,
    private navController: NavController,
    private router: Router,
    private alertController: AlertController,
    private http: HttpClient) { }

  ngOnInit() {
    this.perfil = this.profileService.GetProfile();

    this.perfil.isDoador = this.perfil.isDoador ?? false;
    this.perfil.isCruza = this.perfil.isCruza ?? true;
    this.perfil.isAdocao = this.perfil.isAdocao ?? false;

    this.http.get('../../assets/estados-cidades.json').subscribe(resp => {
      this.states = resp
      this.states = this.states.estados
      if(this.perfil.userState) {
        this.handleStateChange()
      }
    });
  }

  handleStateChange() {
    const foundState = this.states.find(state => state.nome === this.perfil.userState);
    this.cities = foundState.cidades;
  }

  async handleClick() {
    //TODO: adicionar aviso na pagina qual item esta faltando preencher
    if (this.perfil.user && this.perfil.profileIdentity && this.perfil.profileMail && this.perfil.profileAddress) {


      this.profileService.updateContact(this.perfil.user, this.perfil);



      const toast = await this.toastController.create({
        message: 'Seu perfil foi atualaizado com sucesso.',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();

      if (this.perfil.isDoador || this.perfil.isCruza) {

        await this.presentAddPetOption();
      }
      else {
        this.navController.back();
      }


    }
    else {
      const toast = await this.toastController.create({
        message: 'Esta faltando informa??oes do seu perfil.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }


  async presentAddPetOption() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: (this.perfil.isAdocao ? 'Doe ' : 'Cruze ') + 'seu pet!',
      message: 'Deseja cadastrar um novo pet?',
      buttons: [
        {
          text: 'Mais tarde',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigateByUrl('/main');

          }
        }, {
          text: 'Vamos!',
          handler: () => {
            this.router.navigateByUrl('/pet-register');
          }
        }
      ]
    });

    await alert.present();
  }
}
