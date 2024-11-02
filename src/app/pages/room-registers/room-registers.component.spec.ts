import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRegistersComponent } from './room-registers.component';

describe('RoomRegistersComponent', () => {
  let component: RoomRegistersComponent;
  let fixture: ComponentFixture<RoomRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomRegistersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
