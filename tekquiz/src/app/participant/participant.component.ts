import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  public participants;
  constructor(private participantService:ParticipantService) {
    this.participants=this.participantService.getParticipants();
   }

  ngOnInit(): void {
    console.log(this.participants);
  }

}
