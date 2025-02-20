import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeInterestsComponent } from './resume-interests.component';

describe('ResumeInterestsComponent', () => {
  let component: ResumeInterestsComponent;
  let fixture: ComponentFixture<ResumeInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeInterestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
