import { formatCurrency } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [],
})
export class PatientsComponent implements OnInit {
  @Input() patients = [];
  @Output() selectPatient = new EventEmitter()
  createdPatient;
  constructor() {
    this.createdPatient = { id: -1, first_name: '', last_name: '', sex_at_birth: '', birth_day: '', email: '', notes: '' }
   }

  patientClicked(patient) {
    this.selectPatient.emit(patient)
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

//   addPatient = () => {
//     this.api.postPatient(this.createdPatient).subscribe(
//       data => {
//         this.patients.push(data)
//       },
//       error => {
//         console.log(error)
//       }
//     )


//   }
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
