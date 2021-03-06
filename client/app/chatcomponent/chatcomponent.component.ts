import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatService, Message } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';


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
  public supplyOffers = []
  constructor(private chat: ChatService) { }


  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    this.getSupplyOffers();
  }
  sendMessage() {
    this.chat.talk(this.strMsg);
    this.strMsg = '';
  }

  getSupplyOffers() {
    this.chat.getSupplyOffers().subscribe(data => {
      this.supplyOffers = data, console.log(this.supplyOffers)
    },
      error => console.log(error),
    );
  }

}
