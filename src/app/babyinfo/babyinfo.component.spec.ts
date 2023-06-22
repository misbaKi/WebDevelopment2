import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyinfoComponent } from './babyinfo.component';

describe('BabyinfoComponent', () => {
  let component: BabyinfoComponent;
  let fixture: ComponentFixture<BabyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
