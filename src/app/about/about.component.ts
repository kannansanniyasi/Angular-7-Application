import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public empData=[];
  constructor(private appSer:AppServiceService) { }

  ngOnInit(): void {
    this.appSer.getData().subscribe(
      (data)=>
      {
        this.empData=Array.from(Object.keys(data),k=>data[k]);
      }
    );
  }

}
