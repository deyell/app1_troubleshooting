import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor (private firestore: AngularFirestore) {
    //no issue with the constructor
  }
  myArray: any[] = [];    //added this to see if my code was merging to fire base

  ngOnInit(): void {
  }

}
