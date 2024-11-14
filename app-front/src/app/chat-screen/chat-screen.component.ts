import { afterRender,ViewChild, Component, OnInit } from '@angular/core';

import { ChatPromptComponent } from "../chat-prompt/chat-prompt.component";
import { CommonModule } from '@angular/common';
import { MessagingZoneComponent } from "../messaging-zone/messaging-zone.component";
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-screen',
  standalone: true,
  imports: [ChatPromptComponent, CommonModule, MessagingZoneComponent],
  templateUrl: './chat-screen.component.html',
  styleUrl: './chat-screen.component.css'
})
export class ChatScreenComponent implements OnInit{
  allSentMessage!:Array<string>;
  areaMessage!:HTMLElement;
  constructor(){
    this.ngOnInit();
    
  }
  ngOnInit(): void {
    this.allSentMessage=[];
    //console.log(this.areaMessage);
    // this.areaMessage = null;
  }
  
}
