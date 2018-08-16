import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private test:UserService) { }
  list;
  ngOnInit() {
    this.test.getEventList().subscribe(list =>{
      this.list = list;
    })
  }

}
