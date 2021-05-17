import { Injectable } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export interface Mensagem{
  user?:    string,
  userMessage?:    string,
  pet?:  string,
  mensagem?: string,
  Read?: boolean,
  DtMensagem?:  Date,
  msgAnterior?: number,
}



export class MensagemService {

  public mensagens:Mensagem[];
  public mensagem:Mensagem;
  
  public async loadFromStorage() {
     
    const storedMessage = await this.storage.get('Mensagens') as Mensagem[];
     
    if (storedMessage) {
      this.mensagens = storedMessage; 
    }  
  }

  public messagesUsers(user:string,usermsg:string, pet:string) {
    var found = this.mensagens.filter(x=>x.user == user && x.userMessage == usermsg && x.pet == pet);
    return found ?? null;
  }

  getlastcountmessage(user:string, usermsg:string, pet:string){
    return this.messagesUsers(user, usermsg, pet)?.length ?? 0;
  }
  getlastmessage(user:string, usermsg:string, pet: string){
    return  this.messagesUsers(user, usermsg, pet).sort(y=>y.msgAnterior)[0];
  }

  public addMsg(user:string, usermsg:string, pet: string, message:string){
       
      this.mensagem = { };

      this.mensagem.Read = false;
      this.mensagem.mensagem = message;
      this.mensagem.user = user;
      this.mensagem.userMessage = usermsg;
      this.mensagem.DtMensagem = new Date();
      this.mensagem.pet = "";
      this.mensagem.msgAnterior = 

      this.mensagens.push(
        
      );
  }

  private saveAtStorage() {
    this.storage.set('Mensagens', this.mensagens); 
  }

  constructor(private storage: Storage) { }
}
