import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas: Object = []
  term = undefined

  constructor(private logger: LoggingService, private dataService: DataService) {
  }

  ngOnInit(): void {
    // The Observable will automatically convert JSON to an Object
    this.dataService.fetchData().subscribe(data => this.ninjas = data)
  }

  remove(event: MouseEvent) {
    alert('hi')
  }

  logIt() {
    this.logger.log()
  }

}
