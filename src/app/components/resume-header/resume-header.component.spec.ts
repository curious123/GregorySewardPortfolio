import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeContactInfoComponent } from './resume-contact-info.component';

describe('ResumeContactInfoComponent', () => {
  let component: ResumeContactInfoComponent;
  let fixture: ComponentFixture<ResumeContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeContactInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
