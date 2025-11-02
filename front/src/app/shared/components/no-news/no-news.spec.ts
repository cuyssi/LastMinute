import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNews } from './no-news';

describe('NoNews', () => {
  let component: NoNews;
  let fixture: ComponentFixture<NoNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
