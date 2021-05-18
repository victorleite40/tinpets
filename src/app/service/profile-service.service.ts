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
  user?:     string,
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

  public perfil: Profile = {

    isAdocao: true,
    isDoador: true,
    isCruza: true,

  } as Profile;

  public perfis: Profile[] = [];

  public GetProfile(){

    return { ...this.perfil ?? null};
  }

  public findByUsername(username: string): Profile {
    return { ...this.perfis.find(c => c.user === username) ?? null };
  }

  public Login(username:string, password:string){
     
    var found = this.perfis.find(x=>x.password == password && x.user == username);
    if(found != null){
      this.perfil = found;
      this.saveAtStorage();
      return true;
    }
    return false;
  }

  public updateContact(username: string, contact: Profile) {
    this.perfil = contact; 
    this.saveAtStorage();

  }

  public InsertProfile(prof: Profile){
    this.perfil = prof;
    this.saveAtStorage();
  }
  public AddProfile(newProf: Profile){
    this.perfis.push(newProf);
    this.saveAtStorage();
  }
  
  private saveAtStorage() {
    this.storage.set('Perfil', this.perfil);
    this.storage.set('Perfis',this.perfis);
  }

  public async loadFromStorage() {
     
    const storedProfile = await this.storage.get('Perfil') as Profile;
    const storedprofiles = await this.storage.get('Perfis') as Profile[];
    if (storedProfile) {
      this.perfil = storedProfile; 
    } 
    if(storedprofiles){
      this.perfis = storedprofiles;
    }
        
  }

  constructor(private storage: Storage) { 

  } 
}
