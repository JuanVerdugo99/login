import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    return console.log('')
  }

  performe() {
    let credentials = {
      username: 'briseño',
      password: 'lalala123'
    }
    this.authService.login(credentials)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
