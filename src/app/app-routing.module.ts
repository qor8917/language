import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path:'user' ,component:UserComponent
},{
  path:'redirect' ,component:LoginComponent},{path:'table',component:TableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
