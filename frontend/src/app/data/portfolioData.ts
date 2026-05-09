import sanpayLogo from '../../imports/ChatGPT_Image_May_2__2026__01_08_11_AM.png';
import gurtakLogo from '../../imports/Gemini_Generated_Image_msi2d2msi2d2msi2-removebg-preview_1.png';
import gurukulLogo from '../../imports/Screenshot_2026-04-16_at_1.54.58_PM-removebg-preview.png';

export const projects = [
  {
    title: 'SanPay – Offline UPI Mesh Network',
    tech: 'React, Spring Boot',
    date: '04 2026',
    logo: sanpayLogo,
    github: 'https://github.com/sandeepmthf/sanpay',
    liveLink: null,
    description: [
      'Built a full-stack P2P payment system enabling offline mesh-based transaction routing, with a mobile-first React (Vite) + Tailwind UI and Framer Motion interactions.',
      'Implemented real-time network visualization using React Flow and integrated REST APIs with Axios, including polling, retry logic, and resilient state management.',
      'Designed a Spring Boot (Java 17) backend supporting idempotent transactions, asynchronous routing, and gateway-based settlement.'
    ]
  },
  {
    title: 'Gurukul – Full Stack Learning Platform',
    tech: 'React, Node.js, Express, MongoDB',
    date: '2026',
    logo: gurukulLogo,
    github: 'https://github.com/sandeepmthf/Gurukul-FullStack',
    liveLink: 'https://www.gurukultheinstitute.in/',
    description: [
      'Developed a full-stack e-learning platform enabling course management, user authentication, OTP-based verification (Nodemailer), and structured content delivery.',
      'Built a responsive frontend using React and Tailwind CSS with dynamic routing, reusable components, and optimized state management.',
      'Designed and integrated RESTful APIs using Node.js and Express, implementing secure JWT authentication, CRUD operations, and scalable MongoDB-based data management.'
    ]
  },
  {
    title: 'Ghartak – Real Estate Platform',
    tech: 'React, Next.js, Tailwind CSS',
    date: '2026',
    logo: gurtakLogo,
    github: 'https://github.com/sandeepmthf/ghartak2',
    liveLink: 'https://ghartak2.vercel.app/',
    description: [
      'Developed a modern real estate platform with intuitive property browsing and search functionality.',
      'Built with Next.js for optimal performance and SEO, featuring server-side rendering and dynamic routing.',
      'Implemented responsive design with Tailwind CSS ensuring seamless experience across all devices.'
    ]
  }
];

export const experiences = [
  {
    title: 'CSRBOX AICTE Internship',
    role: 'Python, Generative AI, IBM Watsonx, Colab',
    period: 'Mar 2026 – Apr 2026',
    description: [
      'Completed a 6-week AI internship focused on Generative AI, Agentic AI, working with IBM Watsonx, Granite, and Google Colab on real-world AI use cases.',
      'Developed a functional AI agent/project and gained hands-on experience in automation workflows, conversational systems, and AI deployment through expert-led masterclasses.'
    ]
  },
  {
    title: 'Freelance Full Stack Developer',
    role: 'Live',
    period: '2026',
    description: [
      'Developed and deployed a full-stack educational platform with secure authentication, responsive UI, and scalable backend architecture.'
    ]
  }
];

export const skills = {
  'Languages': ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL'],
  'Developer Tools': ['VS Code', 'Jupyter Notebook', 'Git', 'GitHub'],
  'Technologies/Frameworks': ['React.js', 'Redux', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'MongoDB', 'Flutter'],
  'Machine Learning': ['Machine Learning', 'Data Analysis (Pandas, NumPy)']
};

export const certifications = [
  { name: 'CSRBOX AICTE Internship Certificate', link: 'https://drive.google.com/file/d/1Bx_dtCPjXxTwFxB-wjgXy78nKPs0oCVp/view?usp=drive_link' },
  { name: 'Software Development Using IBM Granite', link: 'https://drive.google.com/file/d/1OlJX193kcvUaVQoHxu_GKicqvBDKkegw/view?usp=drive_link' },
  { name: 'Data Analysis - Microsoft - LinkedIn', link: 'https://www.linkedin.com/posts/sandeep-kumar-869189333_data-analysis-certificate-linkedin-learning-ugcPost-7345921006156374018-ZPiJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPahZEBxVePng5iJldJUn4NmzBP3tybZLk' },
  { name: 'Python for Data Science - Infosys', link: 'https://www.linkedin.com/posts/sandeep-kumar-869189333_just-completed-python-for-data-science-share-7335329022123331584-awGZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPahZEBxVePng5iJldJUn4NmzBP3tybZLk' },
  { name: 'SQL', link: null },
  { name: 'NodeJS with Express & MongoDB - Udemy', link: null }
];

export const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'NLP',
  'Data Analytics',
  'Artificial Intelligence',
  'OOPS Concept',
  'Data Science',
  'Machine Learning'
];

export const contactLinks = [
  { icon: 'Phone', text: '+91-6367648334', href: 'tel:+916367648334' },
  { icon: 'Mail', text: 'sandeep636764@gmail.com', href: 'mailto:sandeep636764@gmail.com' },
  { icon: 'Linkedin', text: 'LinkedIn', href: 'https://linkedin.com/in/sandeep-kumar-869189333' },
  { icon: 'Github', text: 'GitHub', href: 'https://github.com/sandeepmthf' },
  { icon: 'Code2', text: 'LeetCode', href: 'https://leetcode.com/u/sandeepmth/' }
];
