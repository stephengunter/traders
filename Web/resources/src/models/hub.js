import * as signalR from '@aspnet/signalr';
const EventEmitter = require('events');

class Hub extends EventEmitter {

   connState = {
      connecting: 0,
      connected: 1,
      reconnecting: 2,
      disconnected: 4
   };
   connection = null;

   constructor(url) {
      super();
      
      this.connection = new signalR.HubConnectionBuilder().withUrl(url).build();
      this.connection.on('receive', () => {
         this.emit('receive');
      });        
   }

   connect(){
      if(this.connection.state !== this.connState.connected){
         this.connection.start()
         .catch(error => {
            console.log(error);
         });
      }
   }

   disconnect(){
      this.connection.stop()
      .catch(error => {
         console.log(error);
      });
   }


   
   
}


export default Hub;