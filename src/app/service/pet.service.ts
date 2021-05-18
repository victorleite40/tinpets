import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Animal{
  petUser:string;
  petName: string;
  petType: string;
  petSex: string;
  petSize: string;
  petAge: string;
  petDoador: boolean;
  petCruza: boolean;
  urlphoto: string;
}

export interface AnimalDoado{
  pet: Animal,
  userDono: string,
  userMatch: string,
}


@Injectable({
  providedIn: 'root'
})



export class PetService {

  public animal: Animal = {} as Animal;
  public Animals: Animal[];


  public GetAnimal(){

    return { ...this.animal ?? null};
  }

  public findByUsername(user: string, pet: string): Animal {
    return { ...this.Animals.find(c => c.petUser === user && c.petName) ?? null };
  }

  
  public updateContact(username: string, contact: Animal) {
    this.animal = contact; 
    this.saveAtStorage();

  }

  public InsertAnimal(prof: Animal){
    this.animal = prof;
    this.saveAtStorage();
  }
  public AddAnimal(newProf: Animal){
    this.Animals.push(newProf);
    this.saveAtStorage();
  }
  
  private saveAtStorage() {
    this.storage.set('animal', this.animal);
    this.storage.set('Animals',this.Animals);
  }

  public async loadFromStorage() {
     
    const storedAnimal = await this.storage.get('animal') as Animal;
    const storedAnimals = await this.storage.get('Animals') as Animal[];
    if (storedAnimal) {
      this.animal = storedAnimal; 
    } 
    if(storedAnimals){
      this.Animals = storedAnimals;
    }
        
  } 
  
  constructor(private storage: Storage) { }
}
