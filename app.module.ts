import { AngularFirestoreModule } from '@angular/fire/firestore';   //error on this line (1)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';                         

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';                 //error on this line (7)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD5bVLqfqyd9ncl0WxKtrlQ-I73ZcJ6PhI",
  authDomain: "rdapp1.firebaseapp.com",
  projectId: "rdapp1",
  storageBucket: "rdapp1.appspot.com",
  messagingSenderId: "437367223575",
  appId: "1:437367223575:web:ad37ace276453120b8f352",
  measurementId: "G-3QCT6JVF07"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),            //added line 25. no issue here
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,                                     //added line 28. no issue here
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }// For Firebase JS SDK v7.20.0 and later, measurementId is optional

