import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


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
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
