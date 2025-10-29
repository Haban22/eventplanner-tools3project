import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; // your future Go backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // return this.http.post(`${this.baseUrl}/login`, { email, password });
    console.log('Mock login:', email);
    localStorage.setItem('user', email);
    return of({ success: true });
  }

  register(email: string, password: string): Observable<any> {
    // return this.http.post(`${this.baseUrl}/register`, { email, password });
    console.log('Mock register:', email);
    return of({ success: true });
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
