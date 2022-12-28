import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDesComponent } from './about-des.component';

describe('AboutDesComponent', () => {
  let component: AboutDesComponent;
  let fixture: ComponentFixture<AboutDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
