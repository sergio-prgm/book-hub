import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusLibrosComponent } from './tus-libros.component';

describe('TusLibrosComponent', () => {
  let component: TusLibrosComponent;
  let fixture: ComponentFixture<TusLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
