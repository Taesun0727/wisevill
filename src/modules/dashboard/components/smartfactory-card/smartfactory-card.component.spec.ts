import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartfactoryCardComponent } from './smartfactory-card.component';

describe('SmartfactoryCardComponent', () => {
  let component: SmartfactoryCardComponent;
  let fixture: ComponentFixture<SmartfactoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartfactoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartfactoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
