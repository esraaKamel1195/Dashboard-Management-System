import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCateringComponent } from './client-catering.component';

describe('ClientCateringComponent', () => {
  let component: ClientCateringComponent;
  let fixture: ComponentFixture<ClientCateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCateringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
