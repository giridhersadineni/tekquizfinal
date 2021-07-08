import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private http:HttpClient,private Config:ConfigService) { }
  private base_url=this.Config.getBaseUrl();
  public quizzes:any;
  ngOnInit(): void {
    this.getQuizzes();
  }

  getQuizzes(): void{
    const q=this.http.get<any[]>('http://localhost:55265/api/quiz');
    q.subscribe((data)=>{
      this.quizzes=data;
      console.log("Data",data);
      
    });
  }



}
