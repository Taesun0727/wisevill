import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkrecordComponent } from './workrecord.component';

describe('WorkrecordComponent', () => {
  let component: WorkrecordComponent;
  let fixture: ComponentFixture<WorkrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
