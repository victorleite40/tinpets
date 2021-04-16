import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.page.html',
  styleUrls: ['./pet-register.page.scss'],
})
export class PetRegisterPage implements OnInit {

  public petName: string;
  public petType: string;
  public petSex: string;
  public petSize: string;
  public petAge: string;

  constructor(public toastController: ToastController) {

  }

  ngOnInit() {

  }

  async clickFunc() {
    if (this.petName && this.petType && this.petSex && this.petSize && this.petAge) {
      const toast = await this.toastController.create({
        message: 'Seu pet foi cadastrado com sucesso.',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
      this.petName = '';
      this.petType = '';
      this.petSex = '';
      this.petSize = '';
      this.petAge = '';
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
}
