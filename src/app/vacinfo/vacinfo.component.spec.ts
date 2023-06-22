import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinfoComponent } from './vacinfo.component';

describe('VacinfoComponent', () => {
  let component: VacinfoComponent;
  let fixture: ComponentFixture<VacinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
