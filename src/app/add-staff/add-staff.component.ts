import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import{ UserService } from '../user.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
fname;
lname;
email;
role;
contact;
  constructor(private test:UserService) { }

staffAdd(){
  this.test.addStaff(this.fname,this.lname,this.email,this.role,this.contact);
}
  

  ngOnInit() {
  }

}
