import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { ApiService } from '../api.service';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { PatientsComponent } from './patients/patients.component';
import { FormsModule } from '@angular/forms'

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
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    FormsModule,
  ]
})
export class MainModule { }
