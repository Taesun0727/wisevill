import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateiotComponent } from './createiot.component';

describe('CreateiotComponent', () => {
  let component: CreateiotComponent;
  let fixture: ComponentFixture<CreateiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateiotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
