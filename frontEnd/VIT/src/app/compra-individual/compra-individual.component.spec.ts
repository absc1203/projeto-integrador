import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraIndividualComponent } from './compra-individual.component';

describe('CompraIndividualComponent', () => {
  let component: CompraIndividualComponent;
  let fixture: ComponentFixture<CompraIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
