
import { Project, SkillCategory, ExperienceItem, Testimonial } from '../types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'EcoSmart Dashboard',
    category: 'Web Application',
    description: 'Enterprise-grade analytics dashboard with real-time data visualization and advanced reporting capabilities.',
    image: 'https://picsum.photos/seed/ecosmart/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'FinTrack Mobile',
    category: 'Mobile App',
    description: 'Cross-platform financial tracking app with AI-powered insights and secure payment integration.',
    image: 'https://picsum.photos/seed/fintrack/800/600',
    tags: ['Flutter', 'Firebase', 'Python', 'TensorFlow'],
    featured: true,
  },
  {
    id: 3,
    title: 'Nova E-Commerce',
    category: 'Web Store',
    description: 'Scalable e-commerce platform with advanced inventory management and payment gateway integration.',
    image: 'https://picsum.photos/seed/nova/800/600',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    featured: true,
  },
  {
    id: 4,
    title: 'HealthSync Pro',
    category: 'SaaS Platform',
    description: 'Healthcare management system connecting patients, doctors, and pharmacies in real-time.',
    image: 'https://picsum.photos/seed/healthsync/800/600',
    tags: ['React', 'Django', 'WebSocket', 'AWS'],
    featured: false,
  },
  // Added Domains
  {
    id: 5,
    title: 'AGSM Live',
    category: 'Live Website',
    description: 'Interactive live platform for professional asset management and tracking.',
    image: 'https://picsum.photos/seed/agsmlive/800/600',
    tags: ['Real-time', 'Web', 'Dashboard'],
    link: 'https://agsm.live'
  },
  {
    id: 6,
    title: 'AIHRPC Org',
    category: 'Live Website',
    description: 'Official portal for the International Human Rights Protection Council.',
    image: 'https://picsum.photos/seed/aihrpc/800/600',
    tags: ['NGO', 'Portal', 'Global'],
    link: 'https://aihrpc.org'
  },
  {
    id: 7,
    title: 'Design4U India',
    category: 'Live Website',
    description: 'The main corporate hub for Design4U premium digital solutions.',
    image: 'https://picsum.photos/seed/design4u/800/600',
    tags: ['Corporate', 'Next.js', 'Design'],
    link: 'https://design4u.in'
  },
  {
    id: 8,
    title: 'Hejje Portal',
    category: 'Live Website',
    description: 'Localized community platform facilitating regional digital transformation.',
    image: 'https://picsum.photos/seed/hejje/800/600',
    tags: ['Community', 'Web Platform'],
    link: 'https://hejje.in'
  },
  {
    id: 9,
    title: 'KCM Education',
    category: 'Live Website',
    description: 'Comprehensive learning management system for educational institutions.',
    image: 'https://picsum.photos/seed/kcmedu/800/600',
    tags: ['EdTech', 'LMS', 'Education'],
    link: 'https://kcmedu.org'
  },
  {
    id: 10,
    title: 'PST Tech Solutions',
    category: 'Live Website',
    description: 'Technology consultancy site focused on enterprise-level IT infrastructure.',
    image: 'https://picsum.photos/seed/psttech/800/600',
    tags: ['Tech', 'IT Solutions', 'B2B'],
    link: 'https://psttechsol.com'
  },
  {
    id: 11,
    title: 'Qualcentrics',
    category: 'Live Website',
    description: 'Specialized consulting platform for data quality and analytics excellence.',
    image: 'https://picsum.photos/seed/qualcentrics/800/600',
    tags: ['Analytics', 'Quality', 'Data'],
    link: 'https://qualcentrics.com'
  },
  {
    id: 12,
    title: 'Reviva HCS',
    category: 'Live Website',
    description: 'Modern healthcare service platform streamlining patient care delivery.',
    image: 'https://picsum.photos/seed/reviva/800/600',
    tags: ['Healthcare', 'HCS', 'Service'],
    link: 'https://revivahcs.com'
  },
  {
    id: 13,
    title: 'Saludo Learning',
    category: 'Live Website',
    description: 'Interactive digital learning environment for skill development.',
    image: 'https://picsum.photos/seed/saludo/800/600',
    tags: ['EdTech', 'E-learning', 'Training'],
    link: 'https://saludolearning.in'
  },
  {
    id: 14,
    title: 'SmartOn Technologies',
    category: 'Live Website',
    description: 'Showcase of IoT and smart device integration solutions for modern homes.',
    image: 'https://picsum.photos/seed/smarton/800/600',
    tags: ['IoT', 'Smart Tech', 'Automation'],
    link: 'https://smartontechnologies.com'
  },
  {
    id: 15,
    title: 'SMM Storage',
    category: 'Live Website',
    description: 'Industrial storage and logistics management system for large scale operations.',
    image: 'https://picsum.photos/seed/smmstorage/800/600',
    tags: ['Logistics', 'Storage', 'System'],
    link: 'https://smmstorage.com'
  },
  {
    id: 16,
    title: 'Stilt Walkers',
    category: 'Live Website',
    description: 'Niche entertainment and talent management platform for specialized artists.',
    image: 'https://picsum.photos/seed/stiltwalkers/800/600',
    tags: ['Entertainment', 'Artist Management'],
    link: 'https://stilt-walkers.com'
  },
  {
    id: 17,
    title: 'Vartmaan Sarokar',
    category: 'Live Website',
    description: 'Media and news portal focused on current affairs and social impact stories.',
    image: 'https://picsum.photos/seed/vartmaan/800/600',
    tags: ['News', 'Media', 'Social'],
    link: 'https://vartmaansarokar.com'
  },
  {
    id: 18,
    title: 'Verify MTA Online',
    category: 'Live Website',
    description: 'Security-first verification service for digital identity and compliance.',
    image: 'https://picsum.photos/seed/verifymta/800/600',
    tags: ['Security', 'Verification', 'FinTech'],
    link: 'https://verifymta.online'
  },
  {
    id: 19,
    title: 'Yugam Cloud',
    category: 'Live Website',
    description: 'High-performance cloud infrastructure and hosting services for developers.',
    image: 'https://picsum.photos/seed/yugam/800/600',
    tags: ['Cloud', 'Hosting', 'Infrastructure'],
    link: 'https://yugamcloud.com'
  },
  {
    id: 20,
    title: 'Zetalix',
    category: 'Live Website',
    description: 'Advanced software development agency portal showcasing complex builds.',
    image: 'https://picsum.photos/seed/zetalix/800/600',
    tags: ['Software', 'DevOps', 'App Dev'],
    link: 'https://zetalix.in'
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Mobile',
    skills: ['Flutter', 'React Native', 'iOS', 'Android'],
  },
  {
    title: 'DevOps & More',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'MongoDB'],
  },
  {
    title: 'Leadership',
    skills: ['Team Management', 'Agile', 'Product Strategy', 'Client Relations'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Founder & CEO',
    company: 'Design4U Web Designs',
    period: '2014 - Present',
    location: 'Bengaluru, India',
    achievements: [
      'Built company from ground up to serve 500+ satisfied clients',
      'Established premium development standards with 98% client satisfaction',
      'Led team expansion and trained 15+ developers in modern tech stacks',
      'Delivered 7-day rapid prototyping framework for startup clients',
    ],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Ltd',
    period: '2012 - 2014',
    location: 'Bengaluru, India',
    achievements: [
      'Architected and delivered 20+ enterprise web applications',
      'Reduced application load time by 60% through optimization',
      'Mentored junior developers in best practices',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Vinesh and his team at Design4U delivered our MVP in record time. Their technical expertise and commitment to quality is unmatched.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc",
    image: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    text: "Working with Vinesh was a game-changer. His deep understanding of both technology and business needs resulted in a product that exceeded expectations.",
    author: "Rajesh Kumar",
    role: "Product Manager",
    company: "Global Solutions",
    image: "https://picsum.photos/seed/rajesh/100/100",
  },
  {
    text: "Design4U's rapid prototyping approach helped us validate our idea quickly. Vinesh's guidance throughout the process was invaluable.",
    author: "Emily Chen",
    role: "Founder",
    company: "StartupHub",
    image: "https://picsum.photos/seed/emily/100/100",
  },
];
