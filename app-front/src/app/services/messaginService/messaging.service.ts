import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { UserMessage } from '../../interface/user-message';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  eventMessagingSubject = new Subject<UserMessage>();
  constructor() { }

  sendingMessage(message:UserMessage):void{
    //console.log('New Message :',message)
    this.eventMessagingSubject.next(message);
  }
  getMessagingObservale():Observable<UserMessage>{
    return this.eventMessagingSubject.asObservable();
  }

}
