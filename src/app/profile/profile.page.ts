import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profileName: string;
  public profileIdentity: string;
  public profileMail: string;
  public profileAddress: string;


  constructor() { }

  ngOnInit() {
  }

}
