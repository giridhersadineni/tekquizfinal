import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  constructor(private http:HttpClient,private Config:ConfigService, private router:Router) { }
  public root_url=this.Config.getBaseUrl();
  public topics:any;
  public loader: boolean = true;

  formData = {
    Name: null,
    TopicId: 0,
    AdminUserId:1
  }

  ngOnInit(): void {
    this.getAllTopics();
  }


  getAllTopics() {
    this.http.get(this.root_url + "/api/topics")
      .subscribe((data) => {
        this.topics = data;
        console.log(data);
        this.loader = false;
      });

  }


  createQuiz(quizData) {
    this.http.post(this.root_url + "/api/quiz", this.formData)
      .subscribe((data) => {
       
        console.log(data);
        this.loader = false;
      });
      this.router.navigate(['/admin/quiz']);
  }

}
