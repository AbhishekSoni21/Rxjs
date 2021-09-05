import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchThrowErrorComponent } from './catch-throw-error.component';

describe('CatchThrowErrorComponent', () => {
  let component: CatchThrowErrorComponent;
  let fixture: ComponentFixture<CatchThrowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchThrowErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
