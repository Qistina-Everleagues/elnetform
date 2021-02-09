import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElnetComponent } from './elnet.component';

describe('ElnetComponent', () => {
  let component: ElnetComponent;
  let fixture: ComponentFixture<ElnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
