import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas: Object = []
  term = undefined
  name = ''
  belt = ''

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fbGetData()
  }

  fbGetData() {
    this.dataService.getData(this.ninjas)
  }

  fbPostData(name: string, belt: string) {
    this.dataService.pushData(name, belt)
  }

}
