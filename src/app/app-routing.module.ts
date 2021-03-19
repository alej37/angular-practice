import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from "./main/patients/patients.component";
import {ShowPatientComponent} from './main/show-patient/show-patient.component';
import {AddPatientComponent} from './main/add-patient/add-patient.component';

const routes: Routes = [
  {path: 'patients', component: PatientsComponent},
  {path: 'create', component: AddPatientComponent},
  // {path: 'show', component: ShowPatientComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
