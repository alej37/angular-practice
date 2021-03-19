import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  providers: [ApiService],

})
export class AddPatientComponent implements OnInit {

  constructor(private api: ApiService) {
    // this.createdPatient = {id: -1, first_name:'',last_name:'',sex_at_birth:'', birth_day:'', email:'', notes:''}
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
