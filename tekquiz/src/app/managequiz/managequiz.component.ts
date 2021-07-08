import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {ConfigService} from '../services/config.service';
@Component({
  selector: 'app-managequiz',
  templateUrl: './managequiz.component.html',
  styleUrls: ['./managequiz.component.css']
})
export class ManagequizComponent implements OnInit {
  public quizzes:any;

  public root_url=this.config.getBaseUrl();
  public isLoading:boolean;
  
  constructor(private http:HttpClient,private config:ConfigService) {
    this.isLoading=true;
   }
  
  fetchQuizzes():any{
    this.http.get(this.root_url+"/api/quiz")
    .subscribe((data)=>{
      this.quizzes = data;
      this.isLoading=false;
      console.log(data);
    });
  }


  ngOnInit(): void {
    this.fetchQuizzes();
  }

}
