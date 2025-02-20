import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-security-clearance',
  imports: [],
  templateUrl: './resume-security-clearance.component.html',
  styleUrl: './resume-security-clearance.component.scss'
})
export class ResumeSecurityClearanceComponent implements OnInit {
  clearanceList = [
    {
      level: 'Secret',
      agency: 'Department of Defense'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
  }
}
