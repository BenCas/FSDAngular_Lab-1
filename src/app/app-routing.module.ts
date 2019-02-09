import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { MainPageComponent } from './main-page/main-page.component';


//here we should register all the vaid routes of the system
const routes: Routes =[

  //root

  {path: '', component: MainPageComponent},

  //other paths
  {path: "user", component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
