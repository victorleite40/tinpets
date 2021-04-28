import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

interface IAnimal {
  id: number;
  type: 'Cão' | 'Gato',
  name: string;
  age: {
    years: number;
    months?: number;
  }
  description: string;
  images: string[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  @ViewChild('slidesRef') slide: IonSlides;

  public Animals: IAnimal[] = [
    {
      id: 1,
      type: 'Cão',
      name: 'Pepe',
      age: {
        years: 3
      },
      description: 'Esse é o Pepe. Ele gosta muito de comer um osso gostoso e duro! Quanto mais duro e maior, melhor.',
      images: ['https://pet.talknmb.com.br/wp-content/uploads/2020/04/artigo_mercado-pet-food-scaled.jpg']
    },
    {
      id: 2,
      type: 'Cão',
      name: 'Marley',
      age: {
        years: 2
      },
      description: 'Nesse caso é Marley ou Eu :(. Minha esposa tem alergia à seus pelos. Muito amoroso!',
      images: ['http://g1.globo.com/Noticias/Cinema/foto/0,,16207727,00.jpg', 'https://i0.wp.com/portalovertube.com/wp-content/uploads/2020/05/Marley-Eu-1132x509.jpg', 'https://veja.abril.com.br/wp-content/uploads/2016/06/filmes-bestseller-13-original.jpeg']
    },
    {
      id: 3,
      type: 'Gato',
      name: 'Tommy',
      age: {
        years: 5
      },
      description: 'Gato dócil e nunca fugiu de casa. Infelizmente está à procura de um novo lar. Por ordem deles.',
      images: ['https://i.pinimg.com/originals/e7/dc/04/e7dc04976eb5c4b823a2b31c0c6e6b2c.jpg']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  popAnimal(id: number) {
    this.Animals = this.Animals.filter(animal => animal.id!==id);
  }

  dislike(id: number) {
    this.popAnimal(id);
  }

  like(id: number) {
    this.popAnimal(id);
  }

}
