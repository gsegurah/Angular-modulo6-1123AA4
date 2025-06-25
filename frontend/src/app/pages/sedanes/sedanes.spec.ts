import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sedanes } from './sedanes.component';

describe('Sedanes', () => {
  let component: Sedanes;
  let fixture: ComponentFixture<Sedanes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sedanes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sedanes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
