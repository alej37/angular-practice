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
  createPatient = null;
  editedPatient = null;

  constructor(private api: ApiService) {
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

  selectPatient(patient) {
    this.selectedPatient = patient;
    this.editedPatient = null;

  }

  editPatient(patient) {
    this.editedPatient = patient;
    this.selectedPatient = null;

  }

  createNewPatient() {
    this.editedPatient = { id: -1, first_name: '', last_name: '', sex_at_birth: '', birth_day: '', email: '', notes: '' };
    this.selectedPatient = null;
  }

  deletedPatient(patient) {
    this.api.deletePatient(patient.id).subscribe()

  }

  ngOnInit() {
    this.getPatients();


  }

}
