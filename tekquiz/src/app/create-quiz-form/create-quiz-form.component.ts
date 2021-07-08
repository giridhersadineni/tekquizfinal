import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.css']
})
export class CreateQuizFormComponent implements OnInit {


  public NoOfQuestions: number = 0;
  public loader: boolean = true;

  formData = {
    Name: null,
    TopicId: null,
    Questions: []
  }
  constructor(private http: HttpClient, private config: ConfigService) { }

  public root_url = this.config.getBaseUrl();

  public topics: any;
  ngOnInit(): void {
    this.getAllTopics()
  }

  getAllTopics() {
    this.http.get(this.root_url + "/api/topics")
      .subscribe((data) => {
        this.topics = data;
        console.log(data);
        this.loader = false;
      });

  }

  newDataObj = {
    Qn: undefined,
    Option1: undefined,
    Option2: undefined,
    Option3: undefined,
    Option4: undefined,
    Answer: undefined,
    ImageName: undefined
  }

  changeOfCount() {
    for (let i = 0; i < this.NoOfQuestions; i++) {
      this.formData.Questions[i] = this.newDataObj
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  createQuiz(quizData) {
    this.http.post(this.root_url + "/api/Quiz", this.formData)
      .subscribe((data) => {
       
        console.log(data);
        this.loader = false;
      });
  }
}


class Question {
  Qn: String;
  Option1: String;
  Option2: String;
  Option3: String;
  Option4: String;
  Answer: any;
  ImageName: String;
}