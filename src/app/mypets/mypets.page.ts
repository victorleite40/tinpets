import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal, PetService } from '../service/pet.service';
import { ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.page.html',
  styleUrls: ['./mypets.page.scss'],
})
export class MypetsPage implements OnInit {

   
  public Pets: Animal[] = [];

  constructor(private petService: PetService,
      
      private perfil: ProfileServiceService,
      private router: Router) { }

  ngOnInit() {
    const URLAnimals = 'assets/imgPets/pexels-photo-'; //end with photo code
     
    this.Pets = this.petService.GetAnimals(this.perfil.perfil.user);
     
    console.log(this.Pets)
    console.log(this.Pets.length)

    for (let i = 0; i <this.Pets.length; i++) {
      console.log(this.Pets[i]);
      let element = this.Pets[i]; 
      var min, max = 0;
      min = element.petType == 'cão' ? i : i + 20;
      max = element.petType == 'cão' ? 20 : 30;
      // min = element.petType == 'cão' ? 0 : 20;
      // max = element.petType == 'cão' ? 19 : 31;

      element.urlphoto = URLAnimals + min + '.jpeg';
      console.log(element);
      this.Pets[i] = element;
    }
    console.log(this.Pets)
    
  }

  async handleClick(user: string, pet: string){

   this.petService.animal = this.petService.GetAnimalbyName(user, pet);
   console.log(this.petService.animal)
   this.router.navigateByUrl('/pet-register');
  }

}
