import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroApoiarComponent } from './quero-apoiar.component';

describe('QueroApoiarComponent', () => {
  let component: QueroApoiarComponent;
  let fixture: ComponentFixture<QueroApoiarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueroApoiarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueroApoiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
