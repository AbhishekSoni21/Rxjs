import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayChild1Component } from './share-replay-child1.component';

describe('ShareReplayChild1Component', () => {
  let component: ShareReplayChild1Component;
  let fixture: ComponentFixture<ShareReplayChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReplayChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
