import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//routing
import { LoginRoutingModule } from './login-routing.module';

//component
import { LoginComponent } from './components/login.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
})
export class LoginModule { }
