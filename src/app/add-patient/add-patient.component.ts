import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Patient} from '../model/patient.model';
import {PatientService} from '../services/patient.service';
import {coerceStringArray} from '@angular/cdk/coercion';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  addPatientFormGroup!: FormGroup;
  searchPatientFormGroup! : FormGroup;
  constructor(private fb: FormBuilder, private searchFb :FormBuilder,
              private patientService:PatientService) { }

  ngOnInit(): void {

      this.searchPatientFormGroup = this.searchFb.group(
          {
              keyword : this.searchFb.control("")
          }
      )







    this.addPatientFormGroup = this.fb.group(
        {
          nom :  this.fb.control(null,[Validators.required]),
          email : this.fb.control(null,[Validators.required,Validators.email]),
          telephone :this.fb.control(null,[Validators.required]),
          prenom :this.fb.control(null,[Validators.required]),
          password :this.fb.control(null,[Validators.required]),
          adresse : this.fb.control(null,[Validators.required])
        }
    )
  }

    savePatient() {
      let patient:Patient = this.addPatientFormGroup.value;
      this.patientService.savePatient(patient).subscribe({
        next : data=>{
          alert("Patient Ajouté !")
        },
        error : err => {
          console.log(err);
        }
      })
    }
}
