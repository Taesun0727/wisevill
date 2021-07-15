import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'environments/environment';

@NgModule({
    declarations: [AppComponent, ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
