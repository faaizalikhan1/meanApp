import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  url = "localhost:2000/tickets/ticketList";
  getTicketList(){
  
   return this.http.get("http://5010363d.ngrok.io/tickets/ticketList");
 
    }

  addTicket(a,b){
    //  const ticketObj={title:a,adult:b,child:c,adultp:d,childp:e,total:f};
    const ticketObj = {title:a, adult:b};
    this.http.post("http://5010363d.ngrok.io/tickets/ticketAdd", ticketObj).subscribe(
      
      response => {
          console.log("POST call in error", response);
      }
 );

}

  deleteTicket(param){
    this.http.get(`http://5010363d.ngrok.io/tickets/ticketsDelete/${param}`).subscribe(response=>{
      console.log("res");
    })
  }

  addEvent(a,b,c,d){
    const eventObj = {eventName: a, eventTitle: b, city: c, address: d}
    this.http.post("http://localhost:2000/addEventsForApp", eventObj);
  }

  getEventList(){
    return this.http.get("http://localhost:2000/eventList");
  }

  signUp(a,b,c,d){
    var userObj = {uname: a, uemail: b, upwd:c, ucontact:d}
    this.http.post("https://localhost:2000/addUsers",userObj);
  }

  login(){
    // const login ={username:user,pass:pwd};
    //  this.http.get("https://localhost:2000/loginCheck");
    return this.http.get("http://localhost:2000/tickets/ticketList");
  }

  addStaff(a,b,c,d,e){
    const obj={fname:a,lname:b,email:c,role:d,contact:e};
    this.http.post("http://localhost:2000/staffSubmit",obj).subscribe(
      
      response => {
          console.log("POST call in error", response);
      }
 );
  }
  
}
