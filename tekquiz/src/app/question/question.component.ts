import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { from, Observable } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {

  public questionid = 0;
  public answerSelected;
  public savedAnswer = {};
  public question:any;
  constructor(private service: QuizService, private router: ActivatedRoute) {
    this.answerSelected = 999;
    this.savedAnswer = false;
    this.savedAnswer=this.service.answers.find(q=>q.QnID == this.questionid);
  }

  hasImage(): boolean {
    if (this.question.ImageName == null) {
      // console.log("It has no Image");
      return false;
    } else {
      // console.log("It has no Image");
      return true;
    }
  }
  isAnswered(): boolean {
    return false;
    return  this.service.questionAnswered(this.question.QnID);
  }

  ngOnInit(): void {
    // this.questionid = parseInt(this.router.snapshot.paramMap.get('questionid'));
    // this.question = this.service.getQuestion(this.questionid);
    this.question=this.service.nextQuestion();
  }

  nextQuestion(): any {
    this.question = this.service.nextQuestion();
    this.answerSelected = this.service.getSavedAnswer(this.question.QnID);
  }

  answerQuestion(): void {
    const ans = this.answerSelected;
    if (ans === 999) {
      alert('Please Select an Answer');
    } else {
      this.service.saveAnswer(this.question.QnID, ans);
    }
  }
}
