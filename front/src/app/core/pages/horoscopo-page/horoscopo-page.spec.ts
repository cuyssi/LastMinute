import { ComponentFixture, TestBed } from '@angular/core/testing';
import HoroscopoPage from './horoscopo-page';


describe('HoroscopoPage', () => {
  let component: HoroscopoPage;
  let fixture: ComponentFixture<HoroscopoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscopoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
