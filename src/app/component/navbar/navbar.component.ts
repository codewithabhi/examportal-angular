import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  firstname='';
  constructor(public login:LoginService){};
  ngOnInit(): void {
    this.firstname=this.login.getUsername();
  }

  public logout()
  {
    this.login.logout();
  }

}
