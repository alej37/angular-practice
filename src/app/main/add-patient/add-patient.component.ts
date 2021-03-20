import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  providers: [ApiService],

})
export class AddPatientComponent implements OnInit {
  @Input() patient;

  patientForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    sex_at_birth: new FormControl(''),
    birth_day: new FormControl(''),
    email: new FormControl(''),
    notes: new FormControl('')
  })
  constructor() {
    // this.createdPatient = {id: -1, first_name:'',last_name:'',sex_at_birth:'', birth_day:'', email:'', notes:''}
  }

  saveForm() {
    console.log(this.patientForm.value)
  }
  // addPatient = () => {
  //   this.api.postPatient().subscribe(
  //     data => {
  //       this.patients.push(data)
  //     },
  //     error => {
  //       console.log(error)
  //     }
  //   )

  // }

  ngOnInit(): void {
  }

}
