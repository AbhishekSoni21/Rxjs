import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayChild2Component } from './share-replay-child2.component';

describe('ShareReplayChild2Component', () => {
  let component: ShareReplayChild2Component;
  let fixture: ComponentFixture<ShareReplayChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReplayChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
