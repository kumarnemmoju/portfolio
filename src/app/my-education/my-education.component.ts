// my-education.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.scss']
})
export class MyEducationComponent implements OnInit {
  educationList = [
    {
      college : 'shu',
      degree: 'M.Sc. in Computer Science & IT',
      institution: 'Sacred Heart University, Bridgeport, Connecticut, USA',
      duration: 'GPA: 3.8/4 | Pursuing (Expected to be completed by Dec’24)',
      description: `Sacred Heart University (SHU) is a private Catholic university renowned for its commitment to academic excellence, cutting-edge research, and fostering a vibrant campus community. Located in Fairfield County, Connecticut, SHU offers a dynamic and interdisciplinary learning environment, empowering students to achieve their professional and personal goals.`,
      highlights: [
        'Ranked among the top universities in the Northeast region by U.S. News & World Report.',
        'State-of-the-art facilities and laboratories supporting advanced research in Computer Science and IT.',
        'Strong industry connections providing students with internship and job opportunities in top tech companies.'
      ],
      website: 'https://www.sacredheart.edu',
      logo: 'https://images.squarespace-cdn.com/content/v1/623126b50d2dfb281caaafd3/9233aac4-c531-436f-9e75-ff48fed231d4/Sacred-Heart-University-logo.jpg'  // Add logo URL here
    },
    {
      college : 'lpu',
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Lovely Professional University, Jalandhar, Punjab',
      duration: 'GPA: 6.17 | 2018',
      description: `Lovely Professional University (LPU) is one of India’s largest private universities, known for its diverse academic offerings, innovative teaching methods, and a vibrant student life. Located in Jalandhar, Punjab, LPU is a leader in providing quality education and is recognized for its state-of-the-art infrastructure and strong focus on research and development.`,
      highlights: [
        'Ranked among the top 100 universities in India by the NIRF (National Institutional Ranking Framework).',
        'International collaborations with over 200 universities worldwide.',
        'World-class campus with modern amenities and facilities for holistic student development.'
      ],
      website: 'https://www.lpu.in',
      logo: 'https://www.lpu.in/lpu-assets/images/logo/logo.svg'  // Add logo URL here
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
