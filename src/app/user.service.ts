import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private secureProtocol : string = "http://"
  private serverAddress : string = "localhost:"
  private serverPort : string = "6900"
                
  constructor(private http: HttpClient) { }

  public getStudents(student : any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/login",student,{});
  }
  public loginAdmin(body :any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/login_admin",body,{})
  }


  public forgottenReq(studentCreds : any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/auth/Forgotten",studentCreds,{})
  }
  public regStudent(student: any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/auth/registration', student, {});
  }

  public checkStudent(student: any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/auth/Forgotten', student, {});
  }

  public sendOTP(requestBody: any)
  {
    return this.http.post<any>("http://localhost/mailman/sendEmail.php",requestBody, {});
  }

  public logActivity(body : any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/track/new",body,{})
  }

  public getTrackAll(body:any)
  {
    return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/track/query",body,{})
  }

  public getAllBlogs()
  {
    return this.http.get<any>(this.secureProtocol+this.serverAddress+this.serverPort+"/blog/blog",{params:{"id":"*"}})
  }


}