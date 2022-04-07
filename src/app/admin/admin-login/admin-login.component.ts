import { Component, OnInit, Output, EventEmitter, ViewChild,Input  } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { UserService } from "../../user.service";
import { SocketioService } from './../../socketio.service'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loading = false;
  email : string = '';
  password : string = '';
  message : string = ''
  isOpen : boolean = false;

  constructor(private _userService: UserService, 
    private router: Router,
    private cookieService: CookieService,
    private _socketConnection : SocketioService) { }

  ngOnInit(): void {
  }
  fogotClicked()
  {
    this.router.navigate(['forgotten'])
  }
  login() {
    if (this.email === '') {
      alert('Please enter email');
      return;
    }

    if (this.password === '') {
      alert('Please enter password');
      return;
    }
    
    this._userService.getStudents({"email":this.email, "password":this.password}).subscribe(async(result)=>{
          if(result.error == false)
          {
            this.cookieService.put("userEmail",result.data[0].email,{secure:true,sameSite:"strict"})
            this._userService.logActivity({"useremail":this.email, "activity":"Logged in"}).subscribe()
            this._socketConnection.socket.emit('LoggedInUsers_soc')
            this.router.navigate(['dashboard'])
          }
          else
          {
            alert(result.message)
          }
      })
  }

}
