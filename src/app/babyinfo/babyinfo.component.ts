import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BabyinfoService } from '../babyinfo.service';
import { babyModel } from './baby.model';
@Component({
  selector: 'app-babyinfo',
  templateUrl: './babyinfo.component.html',
  styleUrls: ['./babyinfo.component.css']
})
export class BabyinfoComponent {
 
  babyform!: FormGroup;
  babyModelObj: babyModel = new babyModel()
  babyData!: babyModel[]

  constructor(private formbuilder: FormBuilder, private babyinfo: BabyinfoService) { }

  ngOnInit(): void {
    this.babyform = this.formbuilder.group({
     name: ['',Validators.required],
     dob: ['',Validators.required],
      tob: ['',Validators.required],
      sex: ['',Validators.required],
      mother: ['',Validators.required],
      father: ['',Validators.required],
       contact: ['',Validators.required],
       address: ['',Validators.required],
    })
    this.getbaby();
  }

  addBaby() {
    this.babyModelObj.name = this.babyform.value.name;
    this.babyModelObj.dob = this.babyform.value.dob;
    this.babyModelObj.tob = this.babyform.value.tob;
    this.babyModelObj.sex = this.babyform.value.sex;
    this.babyModelObj.mother = this.babyform.value.mother;
    this.babyModelObj.father= this.babyform.value.father;
    this.babyModelObj.contact= this.babyform.value.contact;
    this.babyModelObj.address = this.babyform.value.address;

    this.babyinfo.postBaby(this.babyModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Baby Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.babyform.reset();
        this.getbaby();
      })
  }

  getbaby() {
    this.babyinfo.getbaby().subscribe(res => {
      this.babyData = res;

    })
  }

  deleteBaby(row: any) {
    this.babyinfo.deleteBaby(row.id).subscribe(res => {
      alert("Baby Deleted");
      this.getbaby();

    })
  }

  onEdit(row: any) {
    this.babyModelObj.id = row.id;
    this.babyform.controls['name'].setValue(row.name);
    this.babyform.controls['dob'].setValue(row.dob);
    this.babyform.controls['tob'].setValue(row.tob);
    this.babyform.controls['sex'].setValue(row.sex);
    this.babyform.controls['mother'].setValue(row.mother);
    this.babyform.controls['father'].setValue(row.father);
    this.babyform.controls['contact'].setValue(row.contact);
    this.babyform.controls['address'].setValue(row.address);
  }

  updateBaby() {
    this.babyModelObj.name = this.babyform.value.name;
    this.babyModelObj.dob = this.babyform.value.dob;
    this.babyModelObj.tob = this.babyform.value.tob;
    this.babyModelObj.sex = this.babyform.value.sex;
    this.babyModelObj.mother = this.babyform.value.mother;
    this.babyModelObj.father= this.babyform.value.father;
    this.babyModelObj.contact= this.babyform.value.contact;
    this.babyModelObj.address = this.babyform.value.address;
    this.babyinfo.updateBaby(this.babyModelObj, this.babyModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.babyform.reset();
        this.getbaby();
      })
  }

}


