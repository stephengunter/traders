import * as signalR from '@aspnet/signalr';
const EventEmitter = require('events');

class Hub extends EventEmitter {
   constructor(url) {
      super();
      
      this._connection = new signalR.HubConnectionBuilder().withUrl(url).build();
      this._connection.on('receive', () => {         
         this.emit('receive');
      });

      this._connState = {
         connecting: 0,
         connected: 1,
         reconnecting: 2,
         disconnected: 4
      }
   }

   connect(){
      if(this._connection.state !== this._connState.connected){
         this._connection.start()
         .catch(error => {
            console.log(error);
         });
      }
   }

   disconnect(){
      this._connection.stop()
      .catch(error => {
         console.log(error);
      });
   }


   
   
}


export default Hub;