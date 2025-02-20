import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-experience',
  imports: [],
  templateUrl: './resume-experience.component.html',
  styleUrl: './resume-experience.component.scss'
})
export class ResumeExperienceComponent implements OnInit{
  jobs = [
    {
      title: 'Software Engineer',
      company: 'SRC, Inc | Fort Sill, OK',
      period: 'May 2019 - Jan 2025',
      duties: [
        'Performed software maintenance on Tactical Field Systems such as Lightweight Counter Mortar Radar (LCMR) AN/TPQ-50, AN/TPQ-49A, One Semi-Automated Forces (OneSAF) Radar Training System (ORTS), Advanced Field Artillery Data System (AFATDS), and Joint Automated Deep Operations Coordination System (JADOCS)',
        'Participated as a member in various Agile Scrum Teams and was a Scrum Master/Team Leader on JADOCS',
        'Upgraded Java Versions, Red Hat Linux Versions, Communication Standards',
        'Utilized tools such as Agile Scrum, Kanban, Bamboo, JIRA, Bitbucket, Git, Confluence, Docker, Eclipse, JAVA, React, Node.js, JavaScript, PostgreSQL, Windows, Red Hat, QNX, Visual Studio Code, C++, and Windows PowerShell, Python, Bash'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'CACI Federal | Fort Sill, OK',
      period: 'Apr 2015 - May 2019',
      duties: [
        'Performed software maintenance on Tactical Field Systems such as LCMR AN/TPQ-50, CENTAUR, and Computer Meteorological Data-Profiler (CMD-P)',
        'Participated as a member of an Agile Scrum Teams',
        'Upgraded Java Versions, Red Hat Linux Versions, Communication Standards',
        'Utilized tools such as Scrum, Bamboo, JIRA, Bitbucket, Git, Confluence, NetBeans, JAVA, Windows, Windows Mobile, Red Hat Linux, QNX, C++, Python, and Bash',
        'Successfully delivered and fielded two versions of software as the solo member for CMD-P and acted as the sole software developer on the CENTAUR project'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'CGI Federal | Fort Sill, OK',
      period: 'Sep 1983 - May 2015',
      duties: [
        'Performed software maintenance on Tactical Field Systems such as the CMD-P, LCMR AN/TPQ-49 and LCMR AN/TPQ-48, ORTS, Call For Fire Trainer (CFFT), AFATDS, Tactical Fire Direction System (TACFIRE), TACFIRE Digital Message Device (TFDMD), and the Joint Fires and Effects Training System (JFETS)',
        'Upgraded Java Versions, Red Hat Linux Versions, Communication Standards',
        'Utilized a wide variety of programming languages such as Visual C++, Visual C#, JAVA, ADA, Python, Linux, QNX, Unix and Windows',
        'Technical Lead for a six-member team working locally at Fort Sill with Institute of Create Technologies and others on JFETS, an immersive three-dimensional forward observer training system which was determined to be the best of breed trainer and baseline for the Joint Fires Product Line (JFPL) by Program Executive Office of Simulation Training and Instrumentation Systems (PEO STRI)'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
    console.log('ResumeExperienceComponent initialized');
  }

}
