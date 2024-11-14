import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-tab',
  standalone: true,
  imports: [],
  templateUrl: './message-tab.component.html',
  styleUrl: './message-tab.component.css'
})
export class MessageTabComponent {
  @Output() eventDeleteMessage = new EventEmitter<boolean>();
  
  deleteMessage(){
    this.eventDeleteMessage.emit(true);
  }
}
