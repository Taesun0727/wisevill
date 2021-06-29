import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavNoticeComponent } from './top-nav-notice.component';

describe('TopNavNoticeComponent', () => {
  let component: TopNavNoticeComponent;
  let fixture: ComponentFixture<TopNavNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
