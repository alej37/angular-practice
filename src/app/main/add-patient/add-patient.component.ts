import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  providers: [ApiService],

})
export class AddPatientComponent implements OnInit {
  patientForm;
  id = null
  @Input() set patient(Patient){
    this.id = Patient.id;
    this.patientForm = new FormGroup({
      first_name: new FormControl(Patient.first_name),
      last_name: new FormControl(Patient.last_name),
      sex_at_birth: new FormControl(Patient.sex_at_birth),
      birth_date: new FormControl(Patient.birth_date),
      email: new FormControl(Patient.email),
      notes: new FormControl(Patient.notes)
    })

  }

  constructor(private api:ApiService) {
    // this.createdPatient = {id: -1, first_name:'',last_name:'',sex_at_birth:'', birth_day:'', email:'', notes:''}
  }


  saveForm() {
    console.log(this.patientForm.value)
    if (this.id){
      this.api.updatePatient(this.id, this.patientForm.value).subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    } else {
      this.api.postPatient(this.patientForm.value).subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    }
  }

  ngOnInit(): void {
  }

}
