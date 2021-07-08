import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public API_URL="http://localhost:55265";
  constructor() {

  }
  
  getBaseUrl(): string { 
    return this.API_URL;
  }


}
