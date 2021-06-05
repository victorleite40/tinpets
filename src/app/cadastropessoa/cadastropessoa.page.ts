import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Profile, ProfileServiceService } from '../service/profile-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastropessoa',
  templateUrl: './cadastropessoa.page.html',
  styleUrls: ['./cadastropessoa.page.scss'],
})


export class CadastropessoaPage implements OnInit {

  public states: any;
  public cities: any;

  public novoperfil: Profile = {
    user: "",
    password: "",
    userState: "",
    userCity: "",
  };

  constructor(public toastController: ToastController,
    private profService: ProfileServiceService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/estados-cidades.json').subscribe(resp => {
      this.states = resp
      this.states = this.states.estados
    });
  }

  handleStateChange() {
    const foundState = this.states.find(state => state.nome === this.novoperfil.userState);
    this.cities = foundState.cidades;
  }

  async validate() {

    var found = this.profService.findByUsername(this.novoperfil.user);
    if (found.user == this.novoperfil.user) {

      const toast = await this.toastController.create({
        message: 'Nome de usuário já existente',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
      this.novoperfil.user = "";
      return false;
    }

    if (this.novoperfil.user == "" || this.novoperfil.password == "" || this.novoperfil.profileMail == "") {

      const toast = await this.toastController.create({
        message: 'preencha todos os campos necessários',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
      return false;
    }
    return true;
  }

  async handleClick() {



    if (!await this.validate()) {

      return;
    }
    else {

      this.profService.AddProfile(this.novoperfil);
      this.profService.InsertProfile(this.novoperfil);
      const toast = await this.toastController.create({
        message: 'usuário cadastrado com sucesso!',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
      this.router.navigateByUrl('/login');
    }
  }

}
