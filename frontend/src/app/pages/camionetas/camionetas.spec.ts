import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camionetas } from './camionetas';

describe('Camionetas', () => {
  let component: Camionetas;
  let fixture: ComponentFixture<Camionetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Camionetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Camionetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
