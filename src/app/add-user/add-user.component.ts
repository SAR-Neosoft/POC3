import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import{User} from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userservice:UserService) { }


  user:User=new User();
  submitted=false;

  ngOnInit(): void {
    this.submitted=false;  
  }

  usersaveform=new FormGroup({  
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    surname:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    dateOfBirth:new FormControl('' , [Validators.required  ] ),    
   email:new FormControl('',[Validators.required,Validators.email]),  
   password:new FormControl('',[Validators.required, Validators.minLength(5)]),  
   dateOfJoining:new FormControl('' , [Validators.required  ] ),    
    country:new FormControl('' , [Validators.required  ] ),   
    pincode:new FormControl('' , [Validators.required  ] )   
  });  

  saveUser(saveUser){
    this.user=new User();
    this.user.name=this.UserName.value;
    this.user.surname=this.UserSurame.value;
    this.user.dateOfBirth=this.UserDateOfBirth.value;
    this.user.email=this.UserEmail.value;
    this.user.password=this.UserPassword.value;
    this.user.dateOfJoining=this.UserDateOfJoining.value;

    this.user.country=this.UserCountry.value;
    this.user.pincode=this.UserPincode.value;

    this.submitted = true;  
    this.save();  
  }  

  save() {  
    this.userservice.createUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User();  
  }  

 

  get UserName(){  
    return this.usersaveform.get('name');  
  }
  get UserSurame(){  
    return this.usersaveform.get('surname');  
  }
  get UserDateOfBirth(){  
    return this.usersaveform.get('dateOfBirth');  
  }
  get UserEmail(){  
    return this.usersaveform.get('email');  
  }
  get UserPassword(){  
    return this.usersaveform.get('password');  
  }
  get UserDateOfJoining(){  
    return this.usersaveform.get('dateOfJoining');  
  }

  get UserCountry(){  
    return this.usersaveform.get('country');  
  }

  get UserPincode(){  
    return this.usersaveform.get('pincode');  
  }


  
  addUserForm(){  
    this.submitted=false;  
    this.usersaveform.reset();  
  } 
 

}
