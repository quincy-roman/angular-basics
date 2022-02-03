import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    return this.httpClient.get('https://angular-tutorial-9062b-default-rtdb.firebaseio.com/.json')
  }
}
