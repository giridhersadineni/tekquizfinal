import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  public baseUrl:string;
  constructor(private http: HttpClient) {
    
    
   }

  getTopics(){
    let topics:any;
    this.http.get(this.baseUrl+"/topics")
    .subscribe((data)=>{
      topics=data;
    })


  }



}
