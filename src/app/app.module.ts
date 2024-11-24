import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4uyF8Kd1DkjtV2bKmoWmd1JB49NOL5Wo",
  authDomain: "placafacil01-61000.firebaseapp.com",
  projectId: "placafacil01-61000",
  storageBucket: "placafacil01-61000.firebasestorage.app",
  messagingSenderId: "588952676116",
  appId: "1:588952676116:web:5efe9b152621d997530401",
  measurementId: "G-3FKBJZJQMM"
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ],
    
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}