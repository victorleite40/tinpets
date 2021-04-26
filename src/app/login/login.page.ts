import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public eyeType: string;

  constructor() { }

  ngOnInit() {
    this.eyeType = '-off-outline';
  }

  changeEyeType = function() {
    console.warn('entrei')
    this.eyeType = this.eyeType === '-off-outline' ? '' : '-off-outline';
  }

}
