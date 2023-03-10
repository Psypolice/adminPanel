import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {User} from "../components/user";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient ) { }

  getPersonalList(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPerson(id: number){
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
