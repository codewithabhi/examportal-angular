import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/user/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userservice:UserService,private _snackBar: MatSnackBar){}
  public User={
   username:"",
	 password:"",
	 firstname:"",
	 lastname:"",
	 email:"",
	 phone:""
  };
formSubmit()
{
  // alert('Submit Successfully');
  this.userservice.addUser(this.User).subscribe(
      (data:any)=>{
        //success
        // alert('Submit Successfully');
        // this._snackBar.open('Submit Successfully','',{
        //   duration:3000,
        // });
        swal.fire('Submit Successfully','User '+data.username+ ' is registered','success');
      },
      (error)=>
      {
        //error
        // console.log('error');
        this._snackBar.open('Already Exist','',{
          duration:1000,
        });
      }
  );
}
}
