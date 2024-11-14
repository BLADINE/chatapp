import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingZoneComponent } from './messaging-zone.component';

describe('MessaginZoneComponent', () => {
  let component: MessaginZoneComponent;
  let fixture: ComponentFixture<MessaginZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
