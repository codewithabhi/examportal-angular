import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../user/helper';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  [x: string]: any;
 
  user:any;
  constructor(private http:HttpClient) { }

  public getCurrentUser()
  {
    console.log("inside current user");
    
    return this.http.get(baseurl+'/current-user');

  }
  public generateToken(logindata:any)
  {
    return this.http.post(baseurl+'/generate-token',logindata);
  }
  public loginUser(token:any)
  {
    localStorage.setItem("token",token);
    return true;
  }
  public isLoggedIn()
  {
    let token =localStorage.getItem("token");
    if(token==undefined||token==""||token==null)
    {
      return false;
    }
    else
    return true;
  }
  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }
  public setUser(user:any)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }
  public getToken()
  {
    return localStorage.getItem('token');
  }
  public getUser()
  {
     this.user= localStorage.getItem("user");
    if(this.user!=null)
    {
      // console.log(user);
       this.user= JSON.parse(this.user);
        // console.log(user);
        return this.user;
    }
    else{
      this.logout();
      return this.user;
    }
  }
  public getUsername()
  {
    
    this.user=this.getUser();
     return this.user.firstname;
    
  }
  public getUserRole()
  {
  //  this.user=this.getUser();
  //  alert(this.user.firstname);
  //  this.userany.authorities.
  //   alert(this.userany.authorities.authority);
  console.log(this.user);
    return this.user.authorities[0].authority;
    
    // return "Admin";
    // return "Normal";
  }

}
