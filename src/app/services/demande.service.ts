import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {environment} from '../../environments/environment';
import {Demande} from '../model/damande.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  public getDemandes(): Observable<Array<Demande>> {
    return this.http.get<Array<Demande>>(environment.backendHost+"/demandes")
  }
}
