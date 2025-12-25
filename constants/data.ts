
import { Project, SkillCategory, ExperienceItem, Testimonial } from '../types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Social', href: '#social-hub' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yugamcloud-ai-2b4103399/',
    username: '@vineshacharya',
    color: '#0077B5',
    description: 'Professional network & Enterprise updates',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/VineshAcharya2026',
    username: '@VineshAcharya2026',
    color: '#333333',
    description: 'Source code & System architecture',
    icon: 'github'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vinesh___acharya/',
    username: '@vinesh___acharya',
    color: '#E4405F',
    description: 'Visual insights & Lifestyle',
    icon: 'instagram'
  },
  {
    name: 'About.me',
    url: 'https://about.me/vineshacharya',
    username: 'vineshacharya',
    color: '#00A9E0',
    description: 'Personal profile & Bio',
    icon: 'user'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/vineshvj',
    username: '@vineshvj',
    color: '#1877F2',
    description: 'Social updates & Connections',
    icon: 'facebook'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'EcoSmart Dashboard',
    category: 'Web Application',
    description: 'Enterprise-grade analytics dashboard with real-time data visualization and advanced reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'FinTrack Mobile',
    category: 'Mobile App',
    description: 'Cross-platform financial tracking app with AI-powered insights and secure payment integration.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Flutter', 'Firebase', 'Python', 'TensorFlow'],
    featured: true,
  },
  {
    id: 3,
    title: 'Nova E-Commerce',
    category: 'Web Store',
    description: 'Scalable e-commerce platform with advanced inventory management and payment gateway integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    featured: true,
  },
  {
    id: 4,
    title: 'HealthSync Pro',
    category: 'SaaS Platform',
    description: 'Healthcare management system connecting patients, doctors, and pharmacies in real-time.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Django', 'WebSocket', 'AWS'],
    featured: false,
  },
  {
    id: 5,
    title: 'AGSM Live',
    category: 'Live Website',
    description: 'Interactive live platform for professional asset management and tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Real-time', 'Web', 'Dashboard'],
    link: 'https://agsm.live'
  },
  {
    id: 6,
    title: 'AIHRPC Org',
    category: 'Live Website',
    description: 'Official portal for the International Human Rights Protection Council.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    tags: ['NGO', 'Portal', 'Global'],
    link: 'https://aihrpc.org'
  },
  {
    id: 7,
    title: 'Design4U India',
    category: 'Live Website',
    description: 'The main corporate hub for Design4U premium digital solutions.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    tags: ['Corporate', 'Next.js', 'Design'],
    link: 'https://design4u.in'
  },
  {
    id: 8,
    title: 'Hejje Portal',
    category: 'Live Website',
    description: 'Localized community platform facilitating regional digital transformation.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    tags: ['Community', 'Web Platform'],
    link: 'https://hejje.in'
  },
  {
    id: 9,
    title: 'KCM Education',
    category: 'Live Website',
    description: 'Comprehensive learning management system for educational institutions.',
    image: 'https://images.unsplash.com/photo-1523050338692-7b835a07973f?auto=format&fit=crop&q=80&w=800',
    tags: ['EdTech', 'LMS', 'Education'],
    link: 'https://kcmedu.org'
  },
  {
    id: 10,
    title: 'PST Tech Solutions',
    category: 'Live Website',
    description: 'Technology consultancy site focused on enterprise-level IT infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Tech', 'IT Solutions', 'B2B'],
    link: 'https://psttechsol.com'
  },
  {
    id: 11,
    title: 'Qualcentrics',
    category: 'Live Website',
    description: 'Specialized consulting platform for data quality and analytics excellence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Analytics', 'Quality', 'Data'],
    link: 'https://qualcentrics.com'
  },
  {
    id: 12,
    title: 'Reviva HCS',
    category: 'Live Website',
    description: 'Modern healthcare service platform streamlining patient care delivery.',
    image: 'https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=800',
    tags: ['Healthcare', 'HCS', 'Service'],
    link: 'https://revivahcs.com'
  },
  {
    id: 13,
    title: 'Saludo Learning',
    category: 'Live Website',
    description: 'Interactive digital learning environment for skill development.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    tags: ['EdTech', 'E-learning', 'Training'],
    link: 'https://saludolearning.in'
  },
  {
    id: 14,
    title: 'SmartOn Technologies',
    category: 'Live Website',
    description: 'Showcase of IoT and smart device integration solutions for modern homes.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
    tags: ['IoT', 'Smart Tech', 'Automation'],
    link: 'https://smartontechnologies.com'
  },
  {
    id: 15,
    title: 'SMM Storage',
    category: 'Live Website',
    description: 'Industrial storage and logistics management system for large scale operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ['Logistics', 'Storage', 'System'],
    link: 'https://smmstorage.com'
  },
  {
    id: 16,
    title: 'Stilt Walkers',
    category: 'Live Website',
    description: 'Niche entertainment and talent management platform for specialized artists.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    tags: ['Entertainment', 'Artist Management'],
    link: 'https://stilt-walkers.com'
  },
  {
    id: 17,
    title: 'Vartmaan Sarokar',
    category: 'Live Website',
    description: 'Media and news portal focused on current affairs and social impact stories.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    tags: ['News', 'Media', 'Social'],
    link: 'https://vartmaansarokar.com'
  },
  {
    id: 18,
    title: 'Verify MTA Online',
    category: 'Live Website',
    description: 'Security-first verification service for digital identity and compliance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Security', 'Verification', 'FinTech'],
    link: 'https://verifymta.online'
  },
  {
    id: 19,
    title: 'Yugam Cloud',
    category: 'Live Website',
    description: 'High-performance cloud infrastructure and hosting services for developers.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Cloud', 'Hosting', 'Infrastructure'],
    link: 'https://yugamcloud.com'
  },
  {
    id: 20,
    title: 'Zetalix',
    category: 'Live Website',
    description: 'Advanced software development agency portal showcasing complex builds.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    tags: ['Software', 'DevOps', 'App Dev'],
    link: 'https://zetalix.in'
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Architecture',
    skills: ['System Design', 'Cloud Native', 'Microservices', 'High Availability'],
  },
  {
    title: 'Strategic Stack',
    skills: ['React/Next.js', 'Python/FastAPI', 'Node.js', 'AWS/GCP'],
  },
  {
    title: 'Technical Oversight',
    skills: ['Code Auditing', 'Performance Tuning', 'Resource Scaling'],
  },
  {
    title: 'Leadership',
    skills: ['Tech Strategy', 'Team Mentorship', 'Agile Delivery'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Chief Technical Officer',
    company: 'Design4U Web Designs',
    period: '2014 - Present',
    location: 'Bengaluru, India',
    achievements: [
      'Leading technical architecture and long-term tech strategy for the firm',
      'Orchestrated development for 500+ global brands with precision engineering',
      'Optimized tech infrastructure costs by 45% through custom-built automation',
      'Pioneered rapid-market-entry frameworks for high-growth startups',
    ],
  },
  {
    role: 'Senior Systems Architect',
    company: 'Tech Innovations Ltd',
    period: '2012 - 2014',
    location: 'Bengaluru, India',
    achievements: [
      'Architected high-load distributed systems serving millions of users',
      'Developed core financial trading algorithms with millisecond latency',
      'Led the transition to cloud-first architecture across 12 product lines',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Vinesh's technical foresight is unmatched. He doesn't just build, he architects systems that outlast the competition.",
    author: "Sarah Johnson",
    role: "Product Director",
    company: "TechStart Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  },
  {
    text: "The best architectural decision we made was partnering with meet the CTO. Absolute technical mastery.",
    author: "Rajesh Kumar",
    role: "Managing Director",
    company: "Capital Core",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  },
];
