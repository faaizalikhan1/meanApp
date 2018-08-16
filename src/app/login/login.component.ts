import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
import { FormGroup, FormControl, Validators  } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userlist;
 
  loginForm:FormGroup;
  constructor(private test:UserService) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'pwd' : new FormControl('', Validators.required)
    })
  }

  get username() { 
    return this.loginForm.get('username');
  }

  get pwd(){
    return this.loginForm.get('pwd');
  }

}
