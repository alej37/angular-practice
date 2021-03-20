import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { ApiService } from '../api.service';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { PatientsComponent } from './patients/patients.component';


const routes: Routes = [
  { path: 'patients', component: MainComponent }
]

@NgModule({
  declarations: [MainComponent, PatientsComponent,
    AddPatientComponent,
    ShowPatientComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
