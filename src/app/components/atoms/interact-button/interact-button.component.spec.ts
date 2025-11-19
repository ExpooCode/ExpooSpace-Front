import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractButtonComponent } from './interact-button.component';

describe('InteractButtonComponent', () => {
  let component: InteractButtonComponent;
  let fixture: ComponentFixture<InteractButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
