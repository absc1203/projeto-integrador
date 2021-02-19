import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaComponent } from './camiseta.component';

describe('CamisetaComponent', () => {
  let component: CamisetaComponent;
  let fixture: ComponentFixture<CamisetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
