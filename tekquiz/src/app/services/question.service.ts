import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  public base_url;
  constructor(private http: HttpClient, private Config: ConfigService) {
    this.base_url = Config.getBaseUrl();
  }

  getallquestions(): Observable<any> {
    let questions;
    let uri = this.base_url + '/api/questions';
    console.log(uri);
    return this.http.get(uri);
    
  }
}
