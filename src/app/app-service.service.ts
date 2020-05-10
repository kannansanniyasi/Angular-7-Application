import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient:HttpClient) { }
  showTodayDate()
  {
    let date=new Date();
    return date;
  }
  private finalData=[];
  private apiUrl="http://jsonplaceholder.typicode.com/users";
  getData()
  {
    return this.httpClient.get(this.apiUrl);
  }
  doUserLogin(user,password)
  {
   console.log("Service"+user);
   console.log("Service"+password);

   return "login Successfully";
  }
}
