import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {//services are singleton which means they are instantiated when application starts 
                              //and destroy when our application destroys
  baseUrl = 'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) { }

  login(model:any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
