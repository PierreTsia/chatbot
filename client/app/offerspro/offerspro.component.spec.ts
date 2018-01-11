import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersproComponent } from './offerspro.component';

describe('OffersproComponent', () => {
  let component: OffersproComponent;
  let fixture: ComponentFixture<OffersproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
