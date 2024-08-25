import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      image: 'https://www.pixelmattic.com/wp-content/uploads/2016/11/payment-processor-1024x614.jpg',
      title: 'Payment Engine - Toyota & Lexus',
      role: 'Developer/Team Member',
      environment: 'Angular, Node.JS, MongoDB, Typescript, Bootstrap, HTML, CSS, RESTful Webservices',
      fullDescription: 'Contributed to functional discussions, designed unit test cases, developed various user interfaces, and consumed various Web services.'
    },
    {
      image: 'https://shardaassociates.in/wp-content/uploads/2022/09/What-Is-an-Online-Food-Ordering-System.jpg',
      title: 'Delivery Portal',
      role: 'Software Engineer',
      environment: 'Angular 2 and above, Bootstrap, HTML5, CSS3',
      fullDescription: 'Managed Reactive forms in Angular 6 and their validations, implemented a Single page application for managing orders and deliveries.'
    },
    {
      image: 'https://www.ispringsolutions.com/blog/wp-content/uploads/editor/2021/09/ispring-blog-image-1631625871.png',
      title: 'E-Learning Platform',
      role: 'Front-End Developer',
      environment: 'Angular 11, Bootstrap, HTML5, CSS3, TypeScript, RESTful Web Services',
      fullDescription: 'Developed a robust and user-friendly e-learning platform, created reusable Angular components, and implemented role-based access control.'
    }
  ];

  companies = [
    {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbk0BF9khwJtpC1hWVFZiLwyqti5TGDw-66w&s',
      name: 'Zyoin',
      duration: 'Feb 2023 - Aug 2023',
      role: 'Software Developer',
      description: 'Spearheaded the development of user-friendly web interfaces, collaborated closely with UX/UI designers, and maintained documentation of front-end development practices.'
    },
    {
      logo: 'https://mma.prnewswire.com/media/1794711/Cognizant_Logo.jpg?p=facebook',
      name: 'Cognizant',
      duration: 'Jul 2021 - Sep 2022',
      role: 'Programmer Analyst',
      description: 'Implemented responsive web design techniques, engaged in rigorous testing and debugging of web applications, and ensured cross-browser compatibility.'
    },
    {
      logo: 'https://media.licdn.com/dms/image/D560BAQEJm1f31UQFSQ/company-logo_200_200/0/1663047210855?e=2147483647&v=beta&t=H4TkaPOFgE4AyIVpy1sGbeRTmR71YdTFNATkfRWO-tw',
      name: 'Senpro Technologies',
      duration: 'Feb 2019 - Jul 2021',
      role: 'Associate Software Engineer',
      description: 'Provided training and support to junior developers, contributed to the development of multiple web applications, and maintained comprehensive documentation of front-end practices.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
