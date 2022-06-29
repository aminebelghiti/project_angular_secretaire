import {Time} from '@angular/common';
import {Patient} from './patient.model';
export interface Rdv{
    id : number;
    date : Date;
    heure : Time;
    motif : string;
    patient_id :number;
    etat : string;
    acte : string;



}
