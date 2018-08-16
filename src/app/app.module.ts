import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';
import { FormsModule,ReactiveFormsModule }          from '@angular/forms';

import { UserService } from './user.service';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTicketAlt,faUsers, faUserPlus, faSignOutAlt, faSignInAlt, faHome, faToolbox} from '@fortawesome/free-solid-svg-icons';
import { TicketlistExtendedComponent } from './ticketlist-extended/ticketlist-extended.component';

// import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
library.add(faHome,faSignInAlt,faSignOutAlt,faUserPlus, faTicketAlt,faUsers, faToolbox);
// Routes setup

const appRoutes: Routes = [

  { path: 'home', component: MainPageComponent },
  { path: 'addStaff', component: AddStaffComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'addEvent',  component: AddEventComponent },

  { path: 'tix',  component: AddTicketComponent },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'adminPanel',
    component:AdminPanelComponent
  },
  {
    path:'ticketList',
    component: TicketListComponent
  },
  {
    path:'extendedList',
    component: TicketlistExtendedComponent
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

// Routes end

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddStaffComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponentComponent,
    MainPageComponent,
    AddTicketComponent,
    StaffListComponent,
    TicketListComponent,
    AddEventComponent,
    EventListComponent,
    AdminPanelComponent,
    TicketlistExtendedComponent
  ],
  imports: [
    FontAwesomeModule, BrowserModule,ReactiveFormsModule,CommonModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    // SlimLoadingBarModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
