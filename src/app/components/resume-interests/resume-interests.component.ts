import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-interests',
  imports: [],
  templateUrl: './resume-interests.component.html',
  styleUrl: './resume-interests.component.css'
})
export class ResumeInterestsComponent  implements OnInit {
  interests: string = 'Interested in improving my software abilities especially in web development and AI, stock market, helping my wife, and caring for my dogs.';

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
  }
}

