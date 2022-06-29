import {Time} from '@angular/common';
import {Patient} from './patient.model';

export interface Demande{
    id : number;
    date : Date;
    heure : Time;
    motif : string;
    patient_id : number;
    patient : Patient;


}
