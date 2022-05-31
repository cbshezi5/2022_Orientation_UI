import { Component, OnInit } from '@angular/core';
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
    private deviceService: DeviceDetectorService 
  ) { 
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  ngOnInit(): void { 
   
  }

  startOr()
  {
  }
 

}
