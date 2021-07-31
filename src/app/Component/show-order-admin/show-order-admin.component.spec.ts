import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderAdminComponent } from './show-order-admin.component';

describe('ShowOrderAdminComponent', () => {
  let component: ShowOrderAdminComponent;
  let fixture: ComponentFixture<ShowOrderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrderAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
