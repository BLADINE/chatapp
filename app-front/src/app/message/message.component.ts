import { Component,Input, HostListener, OnInit } from '@angular/core';
import { UserMessage } from '../interface/user-message';
import { MessageTabComponent } from '../message-tab/message-tab.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MessageTabComponent, CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit{
  @Input() userMessage!:UserMessage
  displayButtonList!:boolean
  constructor(){
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.displayButtonList=false;
  }

  @HostListener('pointerenter')
  onHoverElement(){
    this.displayButtonList=true;
  }

  @HostListener('pointerleave')
  onLeaveElement(){
    this.displayButtonList=false;
  }
}
