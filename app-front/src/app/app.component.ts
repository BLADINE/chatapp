import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatScreenComponent } from "./chat-screen/chat-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-front';
}
