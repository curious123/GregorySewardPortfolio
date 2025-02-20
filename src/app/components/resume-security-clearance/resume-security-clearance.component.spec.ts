import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSecurityClearanceComponent } from './resume-security-clearance.component';

describe('ResumeSecurityClearanceComponent', () => {
  let component: ResumeSecurityClearanceComponent;
  let fixture: ComponentFixture<ResumeSecurityClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSecurityClearanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSecurityClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
