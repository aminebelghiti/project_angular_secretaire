import {Demande} from './damande.model';

export interface Patient{
    id : number;
    nom :string;
    email : string;
    telephone : number;
    prenom : string;
    password : string;
    adresse : string;
    demandes : Array<Demande>;


}
