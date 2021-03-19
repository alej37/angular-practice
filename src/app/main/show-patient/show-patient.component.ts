import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css'],
  providers: [ApiService],

})
export class ShowPatientComponent implements OnInit {
  @Input() patient;
  constructor(private api: ApiService) { }

  patientClicked = (patient) => {
    this.api.getPatient(patient.id).subscribe(
      data => {
        this.patient = data
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
