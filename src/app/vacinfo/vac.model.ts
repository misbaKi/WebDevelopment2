import { Time } from "@angular/common";

export class vacModel {

    id !: number;
    name: string = '';
    mother: string = '';
    father: string = '';
   dob!: Date;
   tob!:Time;
   contact!:number;
   sex!:string;
   address!:string;
}
