import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickUpComponent implements OnInit {
  CourierList:any;
  courobject:any;

    constructor(private service:DetailService) {}
     courierform:FormGroup=new FormGroup({
      trackId:new FormControl({value:0,disabled:true}),
      custName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      email:new FormControl(),
      mobile: new FormControl(),
      address: new FormControl(),
      courName:new FormControl(),
      docket:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      fromCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      toCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      currentCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      weight:new FormControl("",[Validators.required]),
      date:new FormControl("",[Validators.required]),
      status:new FormControl("",[Validators.required]),
    });
     SaveCustomer(){
      console.log(this.courierform.getRawValue());

      this.service.PostCustomerData(this.courierform.getRawValue()).subscribe(result => {
        this.courobject = result;
     });
    }

    //  GetCourById(cId:any){
    //   this.service.GetCourierById(cId).subscribe(result=>{
    //     this.courobject=result;
    //   });
    //  }
    //  DeleteCourById(cId:any){
    //   this.service.DeleteCourierData(cId).subscribe(result=>{
    //     this.courobject=result;
    //  });
    //  }
    //  UpdateCourById(cId:any){
    //   console.log(this.courUform.getRawValue());
    //   this.service.PutCourierData(this.courUform.getRawValue()).subscribe(result=>{
    //     this.courobject=result;
    //  });

     get custName(): FormControl{
      return this.courierform.get("custName") as FormControl;
    }
    get email(): FormControl{
      return this.courierform.get("email") as FormControl;
    }
    get mobile(): FormControl{
      return this.courierform.get("mobile") as FormControl;
    }
    get address(): FormControl{
      return this.courierform.get("address") as FormControl;
    }
    get courName(): FormControl{
      return this.courierform.get("courName") as FormControl;
    }
    get docket(): FormControl{
      return this.courierform.get("docket") as FormControl;
    }
    get fromCity(): FormControl{
      return this.courierform.get("fromCity") as FormControl;
    }
    get toCity(): FormControl{
      return this.courierform.get("toCity") as FormControl;
    }
    get currentCity(): FormControl{
      return this.courierform.get("currentCity") as FormControl;
    }
    get weight(): FormControl{
      return this.courierform.get("weight") as FormControl;
    }
    get date(): FormControl{
      return this.courierform.get("date") as FormControl;
    }
courierformsubmitted(){
  console.log(this.courierform.valid);
}

  ngOnInit(): void {}

}
