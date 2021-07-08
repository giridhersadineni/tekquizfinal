import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.css']
})
export class FinishQuizComponent implements OnInit {

  constructor(private service:QuizService) { }
  public result;
  ngOnInit(): void {
    this.result = this.service.finalresult();
  }


 

}
