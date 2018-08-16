import { Component, OnInit } from '@angular/core';
// import {NgForm, NgModel} from '@angular/forms';
// import { FormsModule }          from '@angular/forms';
import{ UserService } from '../user.service';
// import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  
  ticket = {adult:0, child:0 }
 
  title;
  ticketTitle;
  eventName;
  get adultPrice():number{
    return this.ticket.adult*15;
  }

  get childPrice():number{
    return this.ticket.child*5;
  }

  get sum(): number{
    return this.ticket.adult*15+this.ticket.child*5;
  }
  
  constructor(private test:UserService) { }
  x;

  addTicket(){
    this.test.addTicket(this.adultPrice, this.childPrice);
  }

  ngOnInit() {

  }

}
