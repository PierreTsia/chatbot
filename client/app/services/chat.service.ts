import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';  
import { ApiAiClient } from 'api-ai-javascript';  
import { Observable } from 'rxjs/Observable';  
import { BehaviorSubject } from 'rxjs/BehaviorSubject';  
import { Http } from '@angular/http';




export class Message {  
  constructor(public msg: string, public from: string, public date:  Date, ) { }  
}  

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;  
  readonly _client = new ApiAiClient({ accessToken: this.token }); 
  conversation = new BehaviorSubject<Message[]>([]);  

  constructor(public http: Http) { }



  talk(msg: string) {  
    const userMessage = new Message(msg, 'user', new Date());  
    this.update(userMessage);  
    console.log(userMessage)
    return this._client.textRequest(msg)  
      .then(res => {  
        const speech = res.result.fulfillment.speech;  
        const botMessage = new Message(speech, 'bot', new Date());  
        this.update(botMessage);  
      });  
  } 

    // Adds message to source  
    update(msg: Message) {  
      this.conversation.next([msg]);  
    }  

    getSupplyOffers(): Observable<any> {
      return this.http.get('http://hackathon-api-biagri.herokuapp.com/supply/offers').map(res => res.json());
    }
  
}
