import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-education',
  imports: [],
  templateUrl: './resume-education.component.html',
  styleUrl: './resume-education.component.scss'
})
export class ResumeEducationComponent implements OnInit {
  educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Oklahoma',
      year: '1979 - 1983'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
  }
}
