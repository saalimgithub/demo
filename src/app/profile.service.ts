import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private baseurl="https://backend321.herokuapp.com/admin/"
  constructor(private http:HttpClient) { }
addProfile(profile:Profile):Observable<any>{

  return this.http.post(`${this.baseurl}`+`add`,profile);
}

viewProfile():Observable<any>{

  return this.http.get(`${this.baseurl}`+`view`);
}

delete(id:number){
  return this.http.delete(`${this.baseurl}`+`delete/`+id);
}
}
