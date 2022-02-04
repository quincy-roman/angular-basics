import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onChildAdded, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADomj6-49_6QcJ1200m18Fk_mAyzyl5hU",
  authDomain: "angular-tutorial-9062b.firebaseapp.com",
  databaseURL: "https://angular-tutorial-9062b-default-rtdb.firebaseio.com",
  projectId: "angular-tutorial-9062b",
  storageBucket: "angular-tutorial-9062b.appspot.com",
  messagingSenderId: "122229404232",
  appId: "1:122229404232:web:8432a0b1bb73d784b31e7d",
  measurementId: "G-KFZT4YSMCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = ref(getDatabase(app))

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    return this.httpClient.get('https://angular-tutorial-9062b-default-rtdb.firebaseio.com/.json')
  }

  getData(ninjas: any){
    return onChildAdded(database, snaptshot => ninjas.push(snaptshot.val()))
  }
  
  pushData(name: string, belt: string) {
    push(database, {name: name, belt: belt})
  }
}
