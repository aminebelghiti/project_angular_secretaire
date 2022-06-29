import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RdvService} from '../services/rdv.service';


import {Rdv} from '../model/rdv.model';
import {Patient} from '../model/patient.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {data} from 'jquery';
@Component({
  selector: 'add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRDVComponent implements OnInit {

  addRdvFormGroup! : FormGroup;


  constructor(private fb : FormBuilder,private rdvService : RdvService,
              @Inject(MAT_DIALOG_DATA) public data :{patient_id : number}
              ) { }

  ngOnInit(): void {




      console.log(this.data.patient_id)
    this.addRdvFormGroup = this.fb.group({

          date : this.fb.control(null, [Validators.required]),
          heure : this.fb.control(null, [Validators.required]),
          motif : this.fb.control(null, [Validators.required]),
          etat : this.fb.control(null, [Validators.required]),
          acte : this.fb.control(null, [Validators.required]),
          patient_id : this.data.patient_id

        }

    )
      console.log(this.data.patient_id)
  }

  saveRdv(){

      console.log(this.addRdvFormGroup.value)
    let rdv:Rdv = this.addRdvFormGroup.value;
    this.rdvService.saveRdv(rdv).subscribe({

        next: data =>{
            alert("RDV Ajouté !")
        },
        error : err=>{
            console.log(err);
        }
    })
  }


}
