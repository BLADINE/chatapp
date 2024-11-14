import {afterRender,AfterRenderPhase, AfterViewChecked,AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserMessage } from '../interface/user-message';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MessagingService } from '../services/messaginService/messaging.service';
import { MessageComponent } from "../message/message.component";
@Component({
  selector: 'app-messaging-zone',
  standalone: true,
  imports: [CommonModule, MessageComponent],
  templateUrl: './messaging-zone.component.html',
  styleUrl: './messaging-zone.component.css'
})
export class MessagingZoneComponent /*implements AfterViewInit,AfterViewChecked*//*implements OnInit*/{
  allSentMessage!:UserMessage[];
  subcriptionMessagingObserver!:Subscription;
  @ViewChild('myAreaMessage') areaMessages!:ElementRef;
  constructor(private messagingService:MessagingService ){
    //this.ngOnInit();
    this.allSentMessage=[];
    this.subcriptionMessagingObserver =this.messagingService
                                            .getMessagingObservale()
                                            .subscribe(
                                              (value)=>{
                                                console.log('value',value);
                                                this.allSentMessage.push(value)
                                                this.scrollScreenMessage();
                                                }
                                            )
    // afterRender(() => {
    //   console.log(this.areaMessages.nativeElement);
    //   console.log('test',this.areaMessages.nativeElement.scroll({top:1000,left:0,behavior:'smooth'}));
    //   console.log(this.areaMessages);
    // }, {phase: AfterRenderPhase.Read});
    
  }

  ngAfterViewInit(): void {
  }
  scrollScreenMessage(){
    setTimeout(()=>{
      this.areaMessages.nativeElement.scroll({top:1000,left:0,behavior:'smooth'});
      // console.log(htmlElement.scrollHeight);
      // console.log(htmlElement.scrollTop);
    },10);
  }
  
}
