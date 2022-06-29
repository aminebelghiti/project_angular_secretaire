import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {AddPatientComponent} from '../add-patient/add-patient.component';


import {PatientService} from '../services/patient.service';
import {catchError, Observable, throwError} from 'rxjs';
import {Patient} from '../model/patient.model';
import {InfoPatientComponent} from '../info-patient/info-patient.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddRDVComponent} from '../add-rdv/add-rdv.component';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


    searchPatientFormGroup :FormGroup;


    listePatients : Array<Patient>;

    constructor(private httpClient: HttpClient, private dialog: MatDialog,
                private patientService : PatientService,
                private router : Router,
                private searchFb :FormBuilder) { }



  ngOnInit(): void {

        this.searchPatientFormGroup = this.searchFb.group(
            {
                keyword : this.searchFb.control("")
            });




      this.patientService.getPatients().subscribe(
          {
              next : (data)=>{
                  this.listePatients=data;
              },
              error :(err)=>{
                  console.log(err);
              }


          },

      )
  }
     public Patient : Patient;
    InfoPatient(patient: Patient) {
        this.router.navigateByUrl("/infoPatient/"+patient.id,{state :patient});
    }

    openDialog() {

        this.dialog.open(AddPatientComponent);
    }



    searchPatient() {

        let kw=this.searchPatientFormGroup?.value.keyword;
        this.patientService.searchPatient(kw).subscribe(
            {
                next : (data)=>{
                    this.listePatients=data;
                },
                error :(err)=>{
                    console.log(err);
                }


            },

        )







    }

    name : string;

    AjouterRDV(p: Patient) {


        this.dialog.open(AddRDVComponent,{
            data :{
                patient_id :p.id
            }
        });
    }
}
