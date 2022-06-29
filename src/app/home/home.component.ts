import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { DeviceDetectorService } from 'ngx-device-detector';
import { SocketioService } from './../socketio.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deviceInfo : any = null;
  
  constructor(
    private deviceService: DeviceDetectorService, 
    private _socketConnection : SocketioService,
    private cookieService: CookieService,
  ) { 
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit(): void { 
   
  }

  startOr()
  {
  }
 

}