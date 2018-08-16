import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from "@angular/forms";
import{ UserService } from '../user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
uname;
uemail;
upwd;
ucontact;
  signUpForm: FormGroup;

  constructor(private test: UserService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'pwd' : new FormControl('', Validators.required),
      'cnumber' : new FormControl('', Validators.required)
    })
  }

  signUp(){
    this.test.signUp(this.uname,this.uemail, this.upwd, this.ucontact);
  }

  get email() {
    return this.signUpForm.get('email'); //notice this
  }

  get username() {
    return this.signUpForm.get('username');
  }

  get pwd() {
    return this.signUpForm.get('pwd');
  }

  get cnumber() {
    return this.signUpForm.get('cnumber');
  }

}
