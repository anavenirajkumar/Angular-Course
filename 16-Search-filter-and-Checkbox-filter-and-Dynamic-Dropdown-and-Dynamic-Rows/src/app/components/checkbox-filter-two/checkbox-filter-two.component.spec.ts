import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterTwoComponent } from './checkbox-filter-two.component';

describe('CheckboxFilterTwoComponent', () => {
  let component: CheckboxFilterTwoComponent;
  let fixture: ComponentFixture<CheckboxFilterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxFilterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
