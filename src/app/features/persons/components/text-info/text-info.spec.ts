import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInfo } from './text-info';

describe('TextInfo', () => {
  let component: TextInfo;
  let fixture: ComponentFixture<TextInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
