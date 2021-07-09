import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoriComponent } from './sori.component';

describe('SoriComponent', () => {
  let component: SoriComponent;
  let fixture: ComponentFixture<SoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
