import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appSer:AppServiceService) { }

  formData;
  ngOnInit(): void {
    this.formData=new FormGroup(
      {
        user:new FormControl(""),
        password:new FormControl("")
      }
    );
  }
  submitData(data)
  {
    console.log("user :"+data.user)
    console.log("password:"+data.password)
    let msg=this.appSer.doUserLogin(data.user,data.password);
    alert(msg);
  }

}
