import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api'
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient ) { }

  getAllPatients(): Observable<any>{
    return this.http.get(this.baseUrl + '/patients/', {headers: this.httpHeaders});
  }
  getPatient(id): Observable<any> {
    return this.http.get(this.baseUrl + '/patients/' + id + "/", { headers: this.httpHeaders });
  }

  postPatient(patient): Observable<any>{
    const body = { first_name: patient.first_name, last_name: patient.last_name, sex_at_birth: patient.sex_at_birth, birth_day: patient.birth_day, email: patient.email, notes: patient.notes}
    return this.http.post(this.baseUrl + '/patients/', body, { headers: this.httpHeaders })
  }
}
