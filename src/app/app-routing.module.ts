import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//import { LoginComponent } from './components/login/components/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    //loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
    //component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
