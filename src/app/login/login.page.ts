import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../service/profile-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public eyeType: string;
  public username: string;
  public password: string;


  constructor(public toastController: ToastController,
    private profService: ProfileServiceService,
    private router: Router) { }

  ngOnInit() {
    this.eyeType = '-off-outline';

    
    
    if(this.profService.perfil != null){
      this.username = this.profService.perfil.user;
      this.password= this.profService.perfil.password;

    }

    
  }

  async handleClick(){
    if(this.profService.Login(this.username, this.password)) 
      {
        this.router.navigateByUrl('/main');
      }
      else{ 
        this.username = "";
        this.password = "";
        const toast = await this.toastController.create({
          message: 'Usuário ou senha incorretos',
          duration: 2000,
          position: 'top',
          color: 'danger'
        });
        toast.present();
         
      }
  }

  changeEyeType = function() {
    console.warn('entrei')
    this.eyeType = this.eyeType === '-off-outline' ? '' : '-off-outline';
  }

}
