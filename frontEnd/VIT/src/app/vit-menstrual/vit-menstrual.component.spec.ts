import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitMenstrualComponent } from './vit-menstrual.component';

describe('VitMenstrualComponent', () => {
  let component: VitMenstrualComponent;
  let fixture: ComponentFixture<VitMenstrualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitMenstrualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitMenstrualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
