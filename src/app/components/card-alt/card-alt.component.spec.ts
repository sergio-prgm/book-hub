import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAltComponent } from './card-alt.component';

describe('CardAltComponent', () => {
  let component: CardAltComponent;
  let fixture: ComponentFixture<CardAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
