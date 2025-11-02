import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSection } from './new-section';

describe('NewSection', () => {
  let component: NewSection;
  let fixture: ComponentFixture<NewSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
