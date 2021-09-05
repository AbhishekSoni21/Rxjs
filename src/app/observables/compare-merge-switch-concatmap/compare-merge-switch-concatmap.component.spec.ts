import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMergeSwitchConcatmapComponent } from './compare-merge-switch-concatmap.component';

describe('CompareMergeSwitchConcatmapComponent', () => {
  let component: CompareMergeSwitchConcatmapComponent;
  let fixture: ComponentFixture<CompareMergeSwitchConcatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareMergeSwitchConcatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareMergeSwitchConcatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
