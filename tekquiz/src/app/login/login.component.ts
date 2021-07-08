import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public formData={
  email:null,
  password:null
}
public userdata={};

public root_url=this.Config.getBaseUrl();


  constructor(private http:HttpClient,private Config:ConfigService,private router:Router) { 

  }


  ngOnInit(): void {
  }

  login(loginForm){

      if(this.formData['email']==null){
        alert("Enter email");
        return;
      }
      else if(this.formData['password']==null){
        alert("Enter password");
        return;
      }
    
      this.http.post(this.root_url + "/api/userlogin", this.formData)
        .subscribe((data) => {
          console.log(data);
          console.log(this.formData);
          this.userdata=data;
          if(data[0].password == this.formData.password){
            this.router.navigate(['/dashboard']);
          }
          else{
            alert("Wrong Password");
          }
        },
        err=>{
          if(err.status==404){
            alert("No User Found");
          }
        }
        );
    
  }
}
