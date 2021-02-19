import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDiversosComponent } from './produtos-diversos.component';

describe('ProdutosDiversosComponent', () => {
  let component: ProdutosDiversosComponent;
  let fixture: ComponentFixture<ProdutosDiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDiversosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
