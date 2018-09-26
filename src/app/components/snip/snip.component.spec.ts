import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipComponent } from './snip.component';

describe('SnipComponent', () => {
  let component: SnipComponent;
  let fixture: ComponentFixture<SnipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
