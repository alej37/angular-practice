import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  patients = [{
    first_name: 'test',
  }];

  constructor(private api:ApiService) {
    this.getPatients();
  }

  getPatients = () => {
    this.api.getAllPatients().subscribe(
      data => {
        this.patients = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
