import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  patients: any = []
  selectedPatient = null;

  constructor(private api: ApiService) { }

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

  selectPatient(patient) {
    this.selectedPatient = patient;
    console.log(this.selectedPatient)
  }


  ngOnInit() {
    this.getPatients();


  }

}
