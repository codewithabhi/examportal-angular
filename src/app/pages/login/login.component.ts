import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData={
    username:"",
    password:""
  }
  user={
    id:'',
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    enabled:true,
    profile:'',
    accountNonExpired:true,
    credentialsNonExpired:true,
    accountNonLocked:true,
    authorities:[
                    {
                      authority:''
                    }
                  ]
    }
  constructor(private login:LoginService,private snack:MatSnackBar){};

  formSubmit()
  {
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
          console.log("generate token"+data);
          this.login.loginUser(data.token);
          this.login.getCurrentUser().subscribe(
            (user:any)=>{
            {
              this.login.setUser(user);
              console.log(user+"current user success");
              if(this.login.getUserRole()=="ADMIN")
              {
                //admin dashboard
                console.log("In admin Module");
                // alert();
                window.location.href="/admin"
              }
              if(this.login.getUserRole()=="Normal")
              {
                console.log("In Normal Module");
                // alert();
                //user dashboard
                window.location.href="/user";
              }
            }
            {
              (error: any)=>{
                console.log(error+"not current user data");
                this.snack.open("Invalid details",'',{
                  duration:3000,
                });
              }
            }
          });
      },
      (error)=>{
        console.log(error);
        console.log("Generate token Issue Invalid details");
        this.snack.open("Generate token Issue Invalid details",'',{
          duration:3000,
        });
      }
    );
  }

}
