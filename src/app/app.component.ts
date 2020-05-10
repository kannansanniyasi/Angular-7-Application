import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  home='Home';
  about='About Us';
  contact='Contact us';
  todayDate;
  public personalData=[];
  constructor(private appSer:AppServiceService)
  {

  }
  ngOnInit(){
    this.todayDate=this.appSer.showTodayDate();
    this.appSer.getData().subscribe(

        (data)=>
        {
          this.personalData=Array.from(Object.keys(data),k=>data[k]);
          console.log(this.personalData);
        }
    );
  }
  

}
