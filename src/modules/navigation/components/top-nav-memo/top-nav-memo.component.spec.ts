import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavMemoComponent } from './top-nav-memo.component';

describe('TopNavMemoComponent', () => {
  let component: TopNavMemoComponent;
  let fixture: ComponentFixture<TopNavMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavMemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
