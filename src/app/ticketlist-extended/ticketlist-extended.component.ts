import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';


@Component({
  selector: 'app-ticketlist-extended',
  templateUrl: './ticketlist-extended.component.html',
  styleUrls: ['./ticketlist-extended.component.css']
})
export class TicketlistExtendedComponent implements OnInit {

  
  li:any;
  constructor(private test:UserService) { }

  ngOnInit() {

    this.test.getTicketList().subscribe(data=>{
      this.li = data;

    })

  }

}
