import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutShopComponent } from './donut-shop.component';

describe('DonutShopComponent', () => {
  let component: DonutShopComponent;
  let fixture: ComponentFixture<DonutShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
