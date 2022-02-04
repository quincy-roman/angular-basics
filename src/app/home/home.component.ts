import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Welcome to the homepage!"

  constructor(private logger: LoggingService) { }

  ngOnInit(): void {
  }

}
