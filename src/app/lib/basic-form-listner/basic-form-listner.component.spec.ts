import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormListnerComponent } from './basic-form-listner.component';

describe('BasicFormListnerComponent', () => {
  let component: BasicFormListnerComponent;
  let fixture: ComponentFixture<BasicFormListnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormListnerComponent]
    });
    fixture = TestBed.createComponent(BasicFormListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
