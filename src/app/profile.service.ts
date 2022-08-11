import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private baseurl="http://localhost:8080/admin/"
  constructor(private http:HttpClient) { }
addProfile(profile:Profile):Observable<any>{

  return this.http.post(`${this.baseurl}`+`add`,profile);
}

viewProfile():Observable<any>{

  return this.http.get(`${this.baseurl}`+`view`);
}

delete(){
  return this.http.delete(`${this.baseurl}`+`delete\id`);
}
}
