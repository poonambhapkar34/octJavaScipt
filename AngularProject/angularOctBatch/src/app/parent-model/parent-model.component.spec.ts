import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModelComponent } from './parent-model.component';

describe('ParentModelComponent', () => {
  let component: ParentModelComponent;
  let fixture: ComponentFixture<ParentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
