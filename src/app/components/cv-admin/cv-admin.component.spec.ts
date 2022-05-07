import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAdminComponent } from './cv-admin.component';

describe('CvAdminComponent', () => {
  let component: CvAdminComponent;
  let fixture: ComponentFixture<CvAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
