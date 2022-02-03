import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This allows one instance of this service to be injected throughout the app.
})
export class LoggingService {

  data = ['tom', 'jerry', 'bill']
  counter = 0

  constructor() { }

  log(){
    if(this.data[this.counter] === undefined) this.counter = 0

    console.log(`Logging a message from ${this.data[this.counter]}`)
    this.counter++
  }
}
