import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: any) {
    return this.http.post(`${environment.api_url}AppUsers/login?include=user`, credentials).toPromise();
  }
}
