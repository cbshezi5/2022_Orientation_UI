import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { HttpClient } from '@angular/common/http';
import { GRAPH_HOSTNAME } from '../globals'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private serverAddress : string = GRAPH_HOSTNAME
  socketState : boolean = false;


  constructor(private http : HttpClient) { }

  getStatsBatch(body : any)
  {
      return this.http.post<any>(this.serverAddress+'/stat/stats', body, {});
  }

  getLogginsOverView()
  {
    return this.http.get<any>(this.serverAddress+'/Track/LoginOverview',{})
  }

  getCampusesMost()
  {
    return this.http.get<any>(this.serverAddress+'/stat/stats',{})
  }
}
