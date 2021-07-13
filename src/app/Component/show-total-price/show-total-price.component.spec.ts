import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTotalPriceComponent } from './show-total-price.component';

describe('ShowTotalPriceComponent', () => {
  let component: ShowTotalPriceComponent;
  let fixture: ComponentFixture<ShowTotalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTotalPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
