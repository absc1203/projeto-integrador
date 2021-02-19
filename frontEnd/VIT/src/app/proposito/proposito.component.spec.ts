import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositoComponent } from './proposito.component';

describe('PropositoComponent', () => {
  let component: PropositoComponent;
  let fixture: ComponentFixture<PropositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
