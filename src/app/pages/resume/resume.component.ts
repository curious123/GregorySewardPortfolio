import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeHeaderComponent } from '../../components/resume-header/resume-header.component';
import { ResumeSummaryComponent } from '../../components/resume-summary/resume-summary.component';
import { ResumeExperienceComponent } from '../../components/resume-experience/resume-experience.component';
import { ResumeEducationComponent } from '../../components/resume-education/resume-education.component';
import { ResumeSecurityClearanceComponent } from '../../components/resume-security-clearance/resume-security-clearance.component';
import { ResumeInterestsComponent } from '../../components/resume-interests/resume-interests.component';

@Component({
  selector: 'app-resume',
  imports: [
    RouterOutlet,
    ResumeHeaderComponent,
    ResumeSummaryComponent,
    ResumeExperienceComponent,
    ResumeEducationComponent,
    ResumeSecurityClearanceComponent,
    ResumeInterestsComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
