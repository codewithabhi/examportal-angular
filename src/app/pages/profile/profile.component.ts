import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public logIn:LoginService){}
  user=null;
  ngOnInit(): void {
    this.logIn.getCurrentUser().subscribe(
     (user:any)=> {
      this.user=user;
      },
     (error:any)=> {
      console.log(error);
      }
    );
  }
 

}
