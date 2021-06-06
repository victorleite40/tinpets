import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private likes: number[] = [];
  private dislikes: number[] = [];

  constructor(private storage: Storage) { }

  private SaveInStorage() {
    this.storage.set('UserPetsReviews', {
      likes: this.likes,
      dislikes: this.dislikes
    });
  }

  public PushLike(id: number) {
    this.likes.push(id);
    this.SaveInStorage();
  }

  public PushDislike(id: number) {
    this.dislikes.push(id);
    this.SaveInStorage();
  }
}
