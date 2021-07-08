import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  public users:any;

  public root_url=this.config.getBaseUrl();
  public isLoading:boolean;
  
  constructor(private http:HttpClient,private config:ConfigService) {
    this.isLoading=true;
   }
  
  getUsers():any{
    this.http.get(this.root_url+"/api/users")
    .subscribe((data)=>{
      this.users = data;
      this.isLoading=false;
      console.log(data);
    });
  }


  ngOnInit(): void {
    this.getUsers();
  }

}
