import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
li:any;

  constructor(private test:UserService) { }

del(x){
  console.log(x);
  this.test.deleteTicket(x);
}

  ngOnInit() {
    this.test.getTicketList().subscribe(data=>{
      this.li = data;
    })
  }

}
