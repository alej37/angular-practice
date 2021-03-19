import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [ApiService],
})
export class PatientsComponent implements OnInit {
  patients = [];
  createdPatient;
  constructor(private api: ApiService) {
    this.getPatients();
    this.createdPatient = { id: -1, first_name: '', last_name: '', sex_at_birth: '', birth_day: '', email: '', notes: '' }
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

  patientClicked = (patient) => {
    this.api.getPatient(patient.id).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    )
  }

  addPatient = () => {
    this.api.postPatient(this.createdPatient).subscribe(
      data => {
        this.patients.push(data)
      },
      error => {
        console.log(error)
      }
    )

  }



  ngOnInit(): void {
  }

}
