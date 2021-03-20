import { formatCurrency } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [],
})
export class PatientsComponent implements OnInit {
  @Input() patients = [];
  @Output() selectPatient = new EventEmitter()
  @Output() editedPatient = new EventEmitter()
  @Output() createNewPatient = new EventEmitter()
  @Output() deletedPatient = new EventEmitter()


  createdPatient;
  constructor(private api: ApiService) {
    this.createdPatient = { id: -1, first_name: '', last_name: '', sex_at_birth: '', birth_day: '', email: '', notes: '' }
   }

  patientClicked(patient) {
    this.selectPatient.emit(patient)
  }

  editPatient(patient) {
    this.editedPatient.emit(patient)
  }
  newPatient() {
    this.createNewPatient.emit()
  }
  removePatient(patient) {
    this.deletedPatient.emit(patient)
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
  // patientClicked = (patient) => {
  //   this.api.getPatient(patient.id).subscribe(
  //     data => {

  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

//   removePatient = (id) => {
//   this.api.deletePatient(id).subscribe(
//     data => {
//       this.getPatients();
//     },
//     error => {
//       console.log(error);
//     }
//   );
// }



  ngOnInit() {

  }

}
