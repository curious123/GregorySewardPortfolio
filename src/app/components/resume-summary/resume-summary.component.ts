import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-summary',
  imports: [],
  templateUrl: './resume-summary.component.html',
  styleUrl: './resume-summary.component.scss'
})
export class ResumeSummaryComponent implements OnInit {
  summary: string = 'Experienced software developer of over 30 years prepared for this role. Skilled in programming languages, software design, debugging, and testing. Strong focus on team collaboration and achieving results. Reliable, adaptable, and solution focused.';

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
  }
}
