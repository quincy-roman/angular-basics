import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninja-directory';
  coolPerson = {
    name: "Quincy",
    age: 22
  }

  yell(event: Event){
    alert("I am yelling")
  }
}
