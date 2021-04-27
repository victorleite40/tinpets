
import { Component, OnInit } from '@angular/core';


export interface IAnimal{
  Name: string,
  Type: 'Cão' | 'Gato',
  UrlPhoto?: string,
};


@Component({
  selector: 'app-saved-pets',
  templateUrl: './saved-pets.page.html',
  styleUrls: ['./saved-pets.page.scss'],
})

export class SavedPetsPage implements OnInit {
 
  public StartPhoto = 0;
  


  public AnimalList: IAnimal[] = [];
 
  constructor() {

   }
   public animal: IAnimal;
  ngOnInit() { 
    const URLAnimals = 'assets/imgPets/pexels-photo-'; //end with photo code
     
    const NameList  = [
    'Buttercup',                      
    'Jellylorum',
    'Ms Patient',
    'Veronicat',
    'Miss Naughty',
    'Thomasina',
    'Ms Mischievous',
    'Henrietta',
    'Ms Harmful of Australia',
    'Silhouette',
    'Miss Forbearing of Australia',
    'Mrs Muddy',
    'Miss Enduring of Australia',
    'Milkshake',
    'Ms Opaquepants',
    'Ms Wetworth',
    'Jennifurr',
    'Ms Diligentworth',
    'Miss Dingypop',
    'Marshmallow',
    'Mrs Tolerantfoot',
    'Chocolate',
    'Oreo',
    'Jacqueline',
    'Chess',
    'Piano',
    'Puffins',
    'Stephanie',
    'Orca',
    'Panda',
    'Latte',
    'Mackenzie',
    'Suduko',
    'Ellie-Mae',
    'Mrs Bad',
    'Alexandria',
    'Millicent',
    'Domino',
    'Patch',
    'Sundae',
    'Valentina',
    'Stevie',
    'Katherine',
    'Minnie',
    'Annabelle', 
    'Gabrielle', 
    'Puffin', 
    'Dice'];
    
    let start = 1 
     
    while(start++ < 30){
 
      this.AnimalList.push(
        {
          Name: NameList[start],
          UrlPhoto: URLAnimals + (start < 10 ? 0 : '') + start +'.jpeg',
          Type:   start < 20 ? 'Cão' : 'Gato'
        }
      );

    };

  }

}
