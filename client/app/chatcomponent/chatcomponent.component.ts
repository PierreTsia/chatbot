import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { BiAgriService } from '../services/bi-agri.service';


import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chatcomponent',
  templateUrl: './chatcomponent.component.html',
  styleUrls: ['./chatcomponent.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ChatcomponentComponent implements OnInit {
  messages: Observable<Message[]>;
  strMsg: string;
  public supplyOffers = [];
  public offers = [];
  constructor(private chat: ChatService, private biAgri : BiAgriService) { }


  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));

  }
  sendMessage() {
    this.chat.talk(this.strMsg);
    this.strMsg = '';
  }

 

}
