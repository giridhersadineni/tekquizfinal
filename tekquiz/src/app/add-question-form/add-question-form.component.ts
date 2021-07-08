import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent implements OnInit {

  public QuestionText:string;
  public quizzes:any;
  public loader:boolean;
 public formData= {
    
    Qn: null,
    ImageName: null,
    Option1: null,
    Option2: null,
    Option3: null,
    Option4: null,
    Answer: null,
    topicId: null,
    AdminUserId: 1,
    QuizID: null
    };
  

  constructor(private http:HttpClient,private Config:ConfigService,private router:Router) { 
    this.loader=true;
  }
  public root_url=this.Config.getBaseUrl();


  ngOnInit(): void {
    this.getQuizzes();

  }

  
  getQuizzes() {
    this.http.get(this.root_url + "/api/quiz")
      .subscribe((data) => {
        this.quizzes = data;
        console.log(data);
        this.loader = false;
      });

  }


  postQuestion(addquestionform){

    this.http.post(this.root_url + "/api/questions", this.formData)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/questions']);
      this.loader = false;
    },
    err=>{
      console.log("Error" + err.status);
    }
    );

    

  }


  
}
