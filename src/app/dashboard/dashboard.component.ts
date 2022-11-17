import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DetailService } from '../detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CustObject:any;
  CustList:any;
  constructor(private service:DetailService,private http:HttpClient,private router:Router) { }
  customerForm=new FormGroup({
    trackId:new FormControl(),
    custName:new FormControl(),
    email:new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    courName:new FormControl(),
    docket: new FormControl(),
    fromCity: new FormControl(),
    toCity: new FormControl(),
    currentCity: new FormControl(),
    weight: new FormControl(),
    date: new FormControl(),
    status: new FormControl(),
  });
  GetAll(){this.service.GetCustomerData().subscribe(result=>{
    this.CustList=result;
  });
  }
  DeleteCustById(custId:any){
    this.service.DeleteCustomerData(custId).subscribe(result=>{
      this.CustObject=result;
   });
   }
   UpdateCustById(custId:any){
    console.log(this.customerForm.getRawValue());
    this.service.PutCustomerData(this.customerForm.getRawValue()).subscribe(result=>{
      this.CustObject=result;
   });
  }
  ngOnInit(): void {
  }

}
