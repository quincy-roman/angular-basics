import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    {name: 'Yoshi', belt: 'red'},
    {name: 'Crystal', belt: 'purple'},
    {name: 'Ryu', belt: 'black'}
  ]
  term = undefined

  constructor(private logger: LoggingService) {
  }

  ngOnInit(): void {
  }

  remove(event: MouseEvent){
    alert('hi')
  }

  logIt(){
    this.logger.log()
  }

}
