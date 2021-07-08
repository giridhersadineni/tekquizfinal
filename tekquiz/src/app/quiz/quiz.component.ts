import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import{ActivatedRoute,Router} from '@angular/router';
import {Subscription,interval} from 'rxjs';
import {FormsModule} from '@angular/forms';
import { Question } from '../question';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { Response } from '../response';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  public quizid:number;
  public questions: any = [];
  public totalquestions: number;
  public totalanswered: number;
  public time: number;
  public timer;
  private subscription: Subscription;
  public responses:Array<Response>=[];
  public selectedAnswer:number;
  public QuizRunning:boolean;

  public question={
    QnID:0,
    Qn:"Loading Text",
    ImageName:"null",
    Option1:"Loading Option",
    Option2:"Loading Option",
    Option3:"Loading Option",
    Option4:"Loading Option",
    Answer:0
  };

  public quizdata:any;
  public quizloaded:boolean;
  public currentQuestionIndex;

  constructor(private service: QuizService, private route: ActivatedRoute,private http:HttpClient,private Config:ConfigService, private router: Router) {
    this.quizloaded=false;
    this.currentQuestionIndex=0;
  }
  
  ngOnInit(): void {
    this.quizid=parseInt(this.route.snapshot.paramMap.get('quizid'));
    this.getQuiz(this.quizid);
    //this.question=this.questions[0];
  }

  hasImage():boolean{
    if(this.question.ImageName==null){
      return false;
    }
    else{
      return true;
    }
  }

  changeanswer(answerid){

    console.log("Hit Answer");
    this.selectedAnswer=answerid;
     let q=this.responses.find(resp=>resp.QnID==this.question.QnID);
     if(q==undefined){
       this.responses.push({
        QnID:this.question.QnID,
        Response:answerid,
        Answer:this.question.Answer
       });
     }
     else{
       let resp_index=this.responses.findIndex(resp=>resp.QnID==this.question.QnID);
       this.responses[resp_index]={
        QnID:this.question.QnID,
        Response:answerid,
        Answer:this.question.Answer
       }
     }
     const json_string=JSON.stringify(this.responses);
     localStorage.setItem("responses",json_string);
  }
  
  getQuiz(quizid:number){
    const q=this.http.get<any[]>('http://localhost:55265/api/quiz/'+quizid);
    q.subscribe((data)=>{
      this.quizdata=data;
      this.questions = this.quizdata.Questions;
      console.log(this.quizdata.Questions);
      console.log("Data",data,this.questions);
    });
  }

  nextQuestion(){
    console.log(this.question);
    if(this.currentQuestionIndex == this.questions.length-1){
      this.currentQuestionIndex=0;
    }
    this.question=this.questions[this.currentQuestionIndex++];
    
    this.clearAnswer();
  
  }

  clearAnswer(){
    this.selectedAnswer=null;
  }

  quizStarted(){
    if(this.QuizRunning){
      return this.QuizRunning;
    }
    return false;
  }

  loadQuestions(){
    console.log(this.questions);
    this.currentQuestionIndex=0;
   // this.question=this.questions[this.currentQuestionIndex];
    console.log(this.questions);
  }


  startQuiz(){
    this.time=this.questions.length*60;
    this.quizloaded=true;
    this.QuizRunning=true;
    this.question=this.questions[0];
    this.timer=setInterval(this.tick,1000);
  }

  isAnswered():boolean{
    if (this.selectedAnswer==null){
      return false;
    }
    return true;
  }

 

  tick() {
    if (this.time > 0) {
      this.time--;
    }
    else if (this.time == 0) {
      //this.subscription.unsubscribe();
      clearInterval(this.timer);
      alert("Time Up");
      // this.router.navigate([ "finishquiz" ]);
    }
  }





  endQuiz() {
    let submit = confirm("Do you want to Finish Exam and Submit");
    if (submit) {
      window.location.href = 'finishquiz';
    }
    else {
    }
  }




}
