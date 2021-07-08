import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  public participants:any[];
  public totalParticipants:number;
  constructor(private http:HttpClient) {
    this.totalParticipants=0; 
    this.fetchParticipants();
  }

  fetchParticipants(): void{
    const q=this.http.get<any[]>('http://localhost:55265/api/participants');
    q.subscribe((data)=>{
      this.participants=data;
      console.log("Data",data);
      this.totalParticipants=this.participants.length;
    });
  }

  getParticipants(){
    console.log("Hit Participant Get");
    if (this.totalParticipants==0){
      return this.participants;
    }
    else{
      return this.participants;
    }
  
  }


}
