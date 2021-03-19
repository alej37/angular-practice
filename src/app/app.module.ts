import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './api.service';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'patients'}
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
