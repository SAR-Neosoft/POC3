import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-user', pathMatch: 'full' },  
  { path: 'view-user', component: UserListComponent },  
  { path: 'add-user', component: AddUserComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
