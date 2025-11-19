import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPageTemplateComponent } from './animal-page-template.component';

describe('AnimalPageTemplateComponent', () => {
  let component: AnimalPageTemplateComponent;
  let fixture: ComponentFixture<AnimalPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalPageTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
