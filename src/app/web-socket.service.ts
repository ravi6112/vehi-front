import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";

@Injectable()
export class webSocketService {
    const subject = webSocket('ws://localhost:4000');

subject.subscribe(
   msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
   err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
   () => console.log('complete') // Called when connection is closed (for whatever reason).
 );

}