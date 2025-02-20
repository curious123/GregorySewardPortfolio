import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.css']
})
export class ResumeHeaderComponent implements OnInit {
  contactInfo = {
    email: 'sewardge@gmail.com',
    phone: '580-647-2916',
    linkedin: 'https://www.linkedin.com/in/gregory-seward-0a93326a/',
    github: '.https://curious123.github.io/',
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
  }
}
