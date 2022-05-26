import { Component, OnInit } from '@angular/core';
import { SocketioService } from './../socketio.service'
import { CookieService } from 'ngx-cookie-service'
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deviceInfo : any = null;
  
  constructor(
    private _socketConnection : SocketioService,
    private cookieService: CookieService,
    private deviceService: DeviceDetectorService 
  ) { 
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo.os)
  }

  ngOnInit(): void { 
   
  }

  startOr()
  {
  }
 

}
