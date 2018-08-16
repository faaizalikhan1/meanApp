import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketlistExtendedComponent } from './ticketlist-extended.component';

describe('TicketlistExtendedComponent', () => {
  let component: TicketlistExtendedComponent;
  let fixture: ComponentFixture<TicketlistExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketlistExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketlistExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
