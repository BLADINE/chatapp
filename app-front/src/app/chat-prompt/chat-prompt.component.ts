import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { MessagingService } from '../services/messaginService/messaging.service';
import { UserMessage } from '../interface/user-message';
import { MessagingService } from '../services/messaginService/messaging.service';
@Component({
  selector: 'app-chat-prompt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-prompt.component.html',
  styleUrl: './chat-prompt.component.css'
})
export class ChatPromptComponent implements OnInit{
  promptMessage!:string;
  userMessage!:UserMessage
  //@Output() newMessageEvent = new EventEmitter<string>();
  
  constructor(private messagingService:MessagingService){
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.promptMessage='';
    this.userMessage = {'message':''};
    //this.userMessage['message'] ='';
  }
  onKeyDown(event:KeyboardEvent):void{
    if (event.key === 'Enter' && this.promptMessage ===''){
      event.preventDefault();
      return;
    }
    if(event.key === 'Enter'){
      this.userMessage['message'] = this.promptMessage;
      //this.newMessageEvent.emit(this.promptMessage);
      this.messagingService.sendingMessage(this.userMessage);
      this.promptMessage='';
      event.preventDefault();
    }
  }
   onKeyPress(event:KeyboardEvent,textAreaElement:HTMLTextAreaElement){
    textAreaElement.focus();
  }
  
  
}
