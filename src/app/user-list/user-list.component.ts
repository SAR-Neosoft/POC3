import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable,Subject } from 'rxjs';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userservice:UserService) { }


  usersArray:any[]=[];

  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  

users:Observable<User[]>;
user:User=new User();
deleteMessage=false;  
userlist:any;  
isupdated = false;   

  ngOnInit() {
    this.isupdated=false; 
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    }; 
    
    this.userservice.getUserList().subscribe(data=>{
      this.users=data;
      this.dtTrigger.next("");  
    })
  }

  deleteUser(id: number) {  
    this.userservice.deleteUser(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.userservice.getUserList().subscribe(data =>{  
            this.users=data  
            })  
        },  
        error => console.log(error));  
  } 

  updateUser(id: number){  
    this.userservice.getUser(id)  
      .subscribe(  
        data => {  
          this.userlist=data             
        },  
        error => console.log(error));  
  }

 userupdateform=new FormGroup({  
  id:new FormControl(),  
  name:new FormControl(),  
    surname:new FormControl(),
    dateOfBirth:new FormControl(),    
   email:new FormControl(),  
   password:new FormControl(),  
   dateOfJoining:new FormControl(),    
    country:new FormControl(),   
    pincode:new FormControl()   
  }); 
  
  
  updateUse(upduse){
    this.user=new User();
    this.user.id=this.UserId.value;
    this.user.name=this.UserName.value;
    this.user.surname=this.UserSurame.value;
    this.user.dateOfBirth=this.UserDateOfBirth.value;
    this.user.email=this.UserEmail.value;
    this.user.password=this.UserPassword.value;
    this.user.dateOfJoining=this.UserDateOfJoining.value;

    this.user.country=this.UserCountry.value;
    this.user.pincode=this.UserPincode.value;

   this.userservice.updateUser(this.user.id,this.user).subscribe(
     data=>{
       this.isupdated=true;
       this.userservice.getUserList().subscribe(data=>{
         this.users=data;
       })
     },error => console.log(error));  
   
  } 

  get UserId(){  
    return this.userupdateform.get('id');  
  }
  get UserName(){  
    return this.userupdateform.get('name');  
  }
  get UserSurame(){  
    return this.userupdateform.get('surname');  
  }
  get UserDateOfBirth(){  
    return this.userupdateform.get('dateOfBirth');  
  }
  get UserEmail(){  
    return this.userupdateform.get('email');  
  }
  get UserPassword(){  
    return this.userupdateform.get('password');  
  }
  get UserDateOfJoining(){  
    return this.userupdateform.get('dateOfJoining');  
  }

  get UserCountry(){  
    return this.userupdateform.get('country');  
  }

  get UserPincode(){  
    return this.userupdateform.get('pincode');  
  }

  changeisUpdate(){  
    this.isupdated=false;  
  } 

}
