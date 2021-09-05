import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTImeComponent } from './debounce-time.component';

describe('DebounceTImeComponent', () => {
  let component: DebounceTImeComponent;
  let fixture: ComponentFixture<DebounceTImeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTImeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceTImeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
