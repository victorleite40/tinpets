import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export interface Endereco{
  cep:    string,
  rua:    string,
  bairro: string,
  cidade: string,
  UF:     string,
  numero: string,
  complemento?: string,
  referencia?: string

}

export interface Profile{
  user:     string,
  password: string,
  profilename?:     string,
  profileIdentity?:  string,
  profileMail?:    string,
  profileAddress?: Endereco,
  isDoador?: boolean,
  isCruza?:  boolean,
  isAdocao?: boolean,

}


@Injectable({
  providedIn: 'root'
})

export class ProfileServiceService {

  public perfil: Profile;

  public perfis: Profile[] = [];

  public GetProfile(){

    return { ...this.perfil ?? null};
  }

  public findByUsername(username: string): Profile {
    return { ...this.perfis.find(c => c.user === username) };
  }

  public updateContact(username: string, contact: Profile) {
    this.perfil = contact; 
    this.saveAtStorage();

  }

  public InsertProfile(prof: Profile){
    this.perfil = prof;
    this.saveAtStorage();
  }

  private saveAtStorage() {
    this.storage.set('Perfil', this.perfil);
  }

  public async loadFromStorage() {
    console.log('leo');
    const storedProfile = await this.storage.get('Perfil') as Profile;
    if (storedProfile) {
      this.perfil = storedProfile;
     
    } 
        
  }

  constructor(private storage: Storage) { 
    console.log('joao');
   

  } 
}
