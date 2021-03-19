import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from "./patients/patients.component";
import {ShowPatientComponent} from './show-patient/show-patient.component';
import {AddPatientComponent} from './add-patient/add-patient.component';

const routes: Routes = [
  {path: '', component: PatientsComponent},
  {path: 'create', component: AddPatientComponent},
  {path: 'show', component: ShowPatientComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
