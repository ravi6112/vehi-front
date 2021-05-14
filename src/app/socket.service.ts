import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket = require("socketcluster-client").create({
    hostname: "localhost",
    port: 8000,
  });

  constructor() {}
  

  listen() {
    console.log('listen function is called');
    this.socket.transmitPublish("customRemoteEvent", "this is the message from client side angular");
  
    (async () => {
      let channel = this.socket.subscribe('updateChannel');
      console.log(channel);
      for await (const data of channel) {
        // ... Handle channel data.
        console.log(data);
      }
    })();

  }

  // connectionError() {
  //   for (let { error } of this.clientSocket.listener('error')) {
  //     console.error(error);
  //   }
  // }

  // connectionComplete() {
  //   try {
  //     let channel = this.clientSocket.subscribe("foo");
  //     console.log(channel);
  //     for (let data of channel) {
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
