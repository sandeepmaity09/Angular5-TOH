import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  add(message:string){
    this.messages.push(message);
    console.log('addes to the message array')
  }

  clear(){
    this.messages = [];
  }
}
