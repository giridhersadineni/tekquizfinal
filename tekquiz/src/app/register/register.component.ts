import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public Name:string;
  public Email:string;
  public Password:string;
  public loader:boolean;
  public root_url=this.Config.getBaseUrl();
  public formData={
    name:null,
    email:null,
    password:null,
    cpassword:null,
  };


  constructor(private http:HttpClient,private Config:ConfigService,private router:Router) { 
    this.loader=false;
  }
  
  ngOnInit(): void {
    
  }
  
  
  
  register(participantform) {
    if(this.formData.password==this.formData.cpassword){
      this.http.post(this.root_url + "/api/users",this.formData)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin']);
        this.loader = false;
      },
      err=>{
        console.log("Error in Register : "+err.status);
      });
    }
    else{
      alert("Check Password : Password and confirm password are not same");
    }
  }
  
}
