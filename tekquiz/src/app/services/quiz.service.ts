import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './../question';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root',
})
export class QuizService {


  public index: number;
  public questions = [];
  public visitedQuestions = [];
  public answers=[];
  public totalQuestions: number;


  constructor(private http: HttpClient, private config: ConfigService) {
    this.index = 0;
    this.totalQuestions = this.questions.length;
    this.answers=this.getAnswers();
  }

  // Reads Questions from API
  // GET : api/questions


  fetchQuestions(): void {
    let base_url = this.config.getBaseUrl();
    const q = this.http.get<any>(base_url + "/api/questions");
    q.subscribe((data) => {
      this.questions = data;
      this.totalQuestions = this.questions.length;
    });
  }

  getQuestions(): any {
    if (this.questions.length === 0) {
      this.fetchQuestions();
      return this.questions;
    }
    else {
      return this.questions;
    }
  }

  getAnswers(): any {
    if (localStorage.getItem('responses') === undefined) {
      return [];
    }
    else {
      return JSON.parse(localStorage.getItem("responses"));
    }
  }

  updateResponse(response: any): void {
    const answer = this.answers.find(
      (resp) => resp.questionId === response.questionId);
    if (answer === undefined) {
      this.answers.push(response);
    }
    else {
      answer.response = parseInt(response.response, null);
    }
    console.log(this.answers);
    localStorage.setItem('responses', JSON.stringify(this.answers));
  }
  questionAnswered(questionId): boolean {
    const answered = this.answers.find(question => question.questionId == questionId);
    if (answered === undefined) {
      return false;
    }
    else {
      return true;
    }
  }
  saveAnswer(questionId: number, answer: number): boolean {
    console.log('Hit Quiz Service');
    const response = { questionId: 0, response: 0, correctAnswer: 0 };
    const question = this.questions.find(question => question.QnID === questionId);
    if (question === undefined) {
      console.log('Quiz Service::SaveAnswer : Question Not Found');
      return false;
    }
    else {
      response.questionId = questionId;
      response.response = answer;
      response.correctAnswer = question?.answer;
      this.updateResponse(response);
      return true;
    }
  }
  getSavedAnswer(questionId): number {
    if (this.questionAnswered(questionId)) {
      return this.answers.find(question => question.QnID = questionId).response;
    }
    else {
      return 999;
    }
  }
  getQuestion(questionId: number): Question {
    const question = this.questions.find(question => question.QnID == questionId);
    return question;
  }
  getTotalQuestions(): number {
    return this.totalQuestions;
  }
  getTotalAnswered(): number {
   
     if( this.answers==null){
      return 0;
     }
     else{
       return this.answers.length;
       }
    
  }
  nextQuestion(): Question {
    if (this.index < this.questions.length) {
      return this.questions[this.index++];
    }
    else {
      this.index = 0;
      return this.questions[this.index];
    }

  }
  finalresult(): any {
    let result = { score: 0, answeredQuestions: 0, totalquestions: 0, correctanswers: 0 };
    let score = 0;
    const answers = this.getAnswers();
    let correctanswers = 0;
    answers.forEach((q) => {
      console.log(q);
      if (q.response == q.correctAnswer) {
        score++;
        correctanswers++;
      }
    });
    result.score = score;
    result.answeredQuestions = this.answers.length;
    result.totalquestions = this.questions.length;
    result.correctanswers = correctanswers;
    console.log(result);
    return result;
  }

}
