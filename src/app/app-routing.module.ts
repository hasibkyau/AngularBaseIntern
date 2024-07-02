import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
       {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
       },
       {
        path:"login",
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
       },
      //  {
      //   path:"sign-up",
      //   loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
      //  },
       {
        path:"sign-up",
        component: SignUpComponent
      },
       {
        path:"home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
       },
       {
        path:"contact",
        loadChildren: () => import('./pages/get-in-touch/get-in-touch.module').then(m => m.GetInTouchModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
