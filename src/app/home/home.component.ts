import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Welcome to the homepage!"
  forPropertyBinding: string = "And this is how property binding works!"
  booleanProperty: boolean = true
  person = {
    name: "Yoshi",
    age: 24
  }
  @Input() coolPerson: any  // Takes data from a parent component
  @Output() onYell = new EventEmitter() // Sends event to parent

  alertMe(message: string){
    alert(message)
  }

  fireYellEvent(event: MouseEvent){
    this.onYell.emit(event)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
