import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterrogatorsDetailsComponent } from './interrogators_details.component';

describe('InterrogatorsDetailsComponent', () => {
  let component: InterrogatorsDetailsComponent;
  let fixture: ComponentFixture<InterrogatorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterrogatorsDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterrogatorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
