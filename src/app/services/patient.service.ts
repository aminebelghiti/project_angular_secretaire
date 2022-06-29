import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private http: HttpClient) {
  }

  public getPatients(): Observable<Array<Patient>> {
    return this.http.get<Array<Patient>>(environment.backendHost+"/patients")
  }

  public findPatientById(id :number): Observable<Patient> {
    return this.http.get<Patient>(environment.backendHost+"/find/"+id)
  }

  public savePatient(patient :Patient) : Observable<Patient> {
    return this.http.post<Patient>(environment.backendHost+"/Patient/add",patient)

  }

  public searchPatient(keyword :string) : Observable<Array<Patient>>{
    return this.http.get<Array<Patient>>(environment.backendHost+"/Patient/search?keyword="+keyword)
  }



}
