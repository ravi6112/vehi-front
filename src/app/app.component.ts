import { SocketService } from './socket.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vehi-front';

  constructor(private  socketService:SocketService){}

  ngOnInit(): void {
    this.socketService.listen()
  }
}
