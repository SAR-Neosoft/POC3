import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl='http://localhost:8085/';  

  constructor(private http:HttpClient) { }

  getUserList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'idOrderbyDobAndDoj');  
  }

  createUser(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'add', user);  
  } 

  deleteUser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteByid/${id}`, { responseType: 'text' });  
  } 

  getUser(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}getBy/${id}`);  
  } 

  updateUser(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}user/${id}`, value);  
  }  
}
