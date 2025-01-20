import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterrogatorsComponent } from './interrogators.component';

describe('InterrogatorsComponent', () => {
  let component: InterrogatorsComponent;
  let fixture: ComponentFixture<InterrogatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterrogatorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterrogatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
