import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecttestComponent } from './subjecttest.component';

describe('SubjecttestComponent', () => {
  let component: SubjecttestComponent;
  let fixture: ComponentFixture<SubjecttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjecttestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjecttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
