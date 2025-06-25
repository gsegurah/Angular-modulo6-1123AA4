import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deportivos } from './deportivos';

describe('Deportivos', () => {
  let component: Deportivos;
  let fixture: ComponentFixture<Deportivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deportivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deportivos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
