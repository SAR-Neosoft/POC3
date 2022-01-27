import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DataTableModule } from 'angular-datatables';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DataTableModule,
    DataTablesModule  ,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
