import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient.model';
import {PatientService} from '../services/patient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {

   patientId : number;
   patient : Patient;
  constructor(private route : ActivatedRoute,
             private router :Router ) {
    this.patient = this.router.getCurrentNavigation()?.extras.state as Patient }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['id'];

  }


}
