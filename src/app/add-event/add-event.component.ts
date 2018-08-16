import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
// import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
 private userlist:any;
  eventName;
  eventTitle;
  city;
  address;
 

  constructor(private test:UserService) { }

  addEvent(){
    this.test.addEvent(this.eventName, this.eventTitle, this.city, this.address);
  }
 
  ngOnInit(){
 

  }

}
