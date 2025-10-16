import { Brain, Code, Cloud, Palette } from 'lucide-react';
import { Service, Project } from '@/types';
import dynamic from 'next/dynamic';

const AIMLScene = dynamic(() => import('@/components/3d/AIMLScene'), {
  ssr: false,
});
const WebDevScene = dynamic(() => import('@/components/3d/WebDevScene'), {
  ssr: false,
});
const DevOpsScene = dynamic(() => import('@/components/3d/DevOpsScene'), {
  ssr: false,
});
const UIUXScene = dynamic(() => import('@/components/3d/UIUXScene'), {
  ssr: false,
});

export const SERVICES: Service[] = [
  {
    id: 'ai-ml',
    title: 'AI/ML Solutions',
    shortDescription: 'Intelligent systems that learn and adapt',
    longDescription:
      'Transform your business with cutting-edge artificial intelligence and machine learning solutions. We develop custom ML models tailored to your specific needs, from predictive analytics to natural language processing. Our team specializes in building scalable AI systems that can process vast amounts of data, identify patterns, and make intelligent decisions in real-time.\n\nWe handle the entire ML pipeline from data collection and preprocessing to model training, optimization, and deployment. Our solutions integrate seamlessly with your existing infrastructure and provide intuitive APIs for easy integration. Whether you need computer vision, recommendation systems, or predictive maintenance, we deliver production-ready AI solutions that drive measurable business value.',
    icon: Brain,
    themeColor: '#6366F1',
    visualComponent: AIMLScene,
    deliverables: [
      'Custom ML model development',
      'Data pipeline architecture',
      'Model training and optimization',
      'API integration',
      'Performance monitoring dashboard',
      'Documentation and training',
    ],
    techStack: [
      'TensorFlow',
      'PyTorch',
      'Python',
      'scikit-learn',
      'AWS SageMaker',
      'Docker',
      'Kubernetes',
      'FastAPI',
    ],
    processSteps: [
      {
        title: 'Discovery & Data Analysis',
        description:
          'We analyze your data, understand business objectives, and identify the most suitable ML approaches for your use case.',
        duration: '1-2 weeks',
      },
      {
        title: 'Model Development',
        description:
          'Our team designs and develops custom ML models, experimenting with different architectures to achieve optimal performance.',
        duration: '3-4 weeks',
      },
      {
        title: 'Training & Optimization',
        description:
          'We train models on your data, fine-tune hyperparameters, and optimize for accuracy, speed, and resource efficiency.',
        duration: '2-3 weeks',
      },
      {
        title: 'Deployment & Monitoring',
        description:
          'We deploy your model to production with proper monitoring, versioning, and continuous improvement pipelines.',
        duration: '1-2 weeks',
      },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    shortDescription: 'Modern, scalable web applications',
    longDescription:
      'Build exceptional web experiences with modern frameworks and best practices. We create fast, responsive, and user-friendly web applications using the latest technologies like React, Next.js, and TypeScript. Our development approach focuses on performance, scalability, and maintainability, ensuring your application can grow with your business.\n\nFrom single-page applications to complex enterprise platforms, we deliver solutions that combine beautiful design with robust functionality. We implement server-side rendering for optimal SEO, progressive web app features for mobile-like experiences, and comprehensive testing to ensure reliability. Our code is clean, well-documented, and follows industry best practices.',
    icon: Code,
    themeColor: '#06B6D4',
    visualComponent: WebDevScene,
    deliverables: [
      'Responsive web application',
      'API integration and development',
      'Database design and implementation',
      'Authentication and authorization',
      'Testing suite (unit, integration, e2e)',
      'Deployment and CI/CD setup',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'GraphQL',
      'Jest',
    ],
    processSteps: [
      {
        title: 'Requirements & Architecture',
        description:
          'We define technical requirements, design system architecture, and plan the development roadmap with clear milestones.',
        duration: '1-2 weeks',
      },
      {
        title: 'Development & Integration',
        description:
          'Our team builds your application iteratively, integrating APIs, databases, and third-party services as needed.',
        duration: '4-8 weeks',
      },
      {
        title: 'Testing & Quality Assurance',
        description:
          'Comprehensive testing across devices and browsers ensures your application works flawlessly for all users.',
        duration: '1-2 weeks',
      },
      {
        title: 'Deployment & Launch',
        description:
          'We deploy your application to production with proper monitoring, analytics, and support for a smooth launch.',
        duration: '1 week',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    shortDescription: 'Streamlined deployment and infrastructure',
    longDescription:
      'Accelerate your development lifecycle with modern DevOps practices and cloud infrastructure. We design and implement automated CI/CD pipelines that enable rapid, reliable deployments while maintaining high quality standards. Our cloud solutions leverage AWS, Azure, or Google Cloud to provide scalable, cost-effective infrastructure that grows with your needs.\n\nWe specialize in containerization with Docker and orchestration with Kubernetes, enabling consistent deployments across environments. Our infrastructure-as-code approach ensures reproducibility and version control for all infrastructure changes. We implement comprehensive monitoring and logging solutions that provide real-time insights into system health and performance.',
    icon: Cloud,
    themeColor: '#10B981',
    visualComponent: DevOpsScene,
    deliverables: [
      'CI/CD pipeline setup',
      'Cloud infrastructure provisioning',
      'Container orchestration',
      'Monitoring and logging setup',
      'Security and compliance configuration',
      'Documentation and runbooks',
    ],
    techStack: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'ELK Stack',
    ],
    processSteps: [
      {
        title: 'Infrastructure Assessment',
        description:
          'We evaluate your current infrastructure, identify bottlenecks, and design an optimized cloud architecture.',
        duration: '1 week',
      },
      {
        title: 'Pipeline & Infrastructure Setup',
        description:
          'We build automated CI/CD pipelines and provision cloud infrastructure using infrastructure-as-code.',
        duration: '2-3 weeks',
      },
      {
        title: 'Migration & Integration',
        description:
          'We migrate existing applications to the new infrastructure and integrate with your development workflow.',
        duration: '2-4 weeks',
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'We set up comprehensive monitoring and optimize infrastructure for cost, performance, and reliability.',
        duration: '1-2 weeks',
      },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    shortDescription: 'Beautiful, intuitive user experiences',
    longDescription:
      'Create memorable digital experiences with thoughtful UI/UX design. We combine aesthetic excellence with deep understanding of user behavior to craft interfaces that are not only beautiful but also intuitive and accessible. Our design process is research-driven, starting with user personas and journey mapping to ensure we solve real user problems.\n\nWe create comprehensive design systems that maintain consistency across your entire product ecosystem. From initial wireframes to high-fidelity prototypes, we iterate based on user feedback and usability testing. Our designs are built with developers in mind, including detailed specifications and assets that ensure smooth handoff and pixel-perfect implementation.',
    icon: Palette,
    themeColor: '#EC4899',
    visualComponent: UIUXScene,
    deliverables: [
      'User research and personas',
      'Wireframes and user flows',
      'High-fidelity UI designs',
      'Interactive prototypes',
      'Design system documentation',
      'Asset delivery for development',
    ],
    techStack: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Framer',
      'Principle',
      'InVision',
      'Maze',
      'Optimal Workshop',
    ],
    processSteps: [
      {
        title: 'Research & Discovery',
        description:
          'We conduct user research, competitive analysis, and stakeholder interviews to understand your users and goals.',
        duration: '1-2 weeks',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create low-fidelity wireframes and interactive prototypes to test core concepts and user flows.',
        duration: '2-3 weeks',
      },
      {
        title: 'Visual Design',
        description:
          'We develop high-fidelity designs with refined visual aesthetics, consistent branding, and attention to detail.',
        duration: '2-4 weeks',
      },
      {
        title: 'Testing & Handoff',
        description:
          'We conduct usability testing, iterate based on feedback, and deliver comprehensive design documentation.',
        duration: '1-2 weeks',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ml-recommender',
    title: 'E-commerce Recommendation Engine',
    client: 'RetailTech Co.',
    category: 'AI/ML',
    year: 2024,
    description:
      'Built a sophisticated ML-powered recommendation system that increased conversion rates by 35%',
    thumbnailUrl: '/projects/ml-recommender.jpg',
    tags: ['Machine Learning', 'Python', 'AWS', 'TensorFlow'],
  },
  {
    id: 'fintech-platform',
    title: 'Financial Analytics Platform',
    client: 'FinanceHub',
    category: 'Web Development',
    year: 2024,
    description:
      'Developed a real-time financial analytics dashboard with complex data visualizations',
    thumbnailUrl: '/projects/fintech-platform.jpg',
    tags: ['React', 'TypeScript', 'GraphQL', 'D3.js'],
  },
  {
    id: 'cloud-migration',
    title: 'Enterprise Cloud Migration',
    client: 'GlobalCorp',
    category: 'DevOps',
    year: 2023,
    description:
      'Migrated legacy infrastructure to AWS with zero downtime and 40% cost reduction',
    thumbnailUrl: '/projects/cloud-migration.jpg',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    id: 'health-app',
    title: 'Healthcare Mobile App',
    client: 'MediCare',
    category: 'UI/UX',
    year: 2023,
    description:
      'Designed an intuitive health tracking app that achieved 4.8 star rating',
    thumbnailUrl: '/projects/health-app.jpg',
    tags: ['Figma', 'Mobile Design', 'User Research', 'Prototyping'],
  },
  {
    id: 'ai-chatbot',
    title: 'Customer Support AI Assistant',
    client: 'SupportTech',
    category: 'AI/ML',
    year: 2023,
    description:
      'Implemented NLP-powered chatbot handling 70% of customer inquiries autonomously',
    thumbnailUrl: '/projects/ai-chatbot.jpg',
    tags: ['NLP', 'Python', 'FastAPI', 'React'],
  },
  {
    id: 'saas-platform',
    title: 'SaaS Marketing Platform',
    client: 'MarketForce',
    category: 'Web Development',
    year: 2023,
    description:
      'Built a comprehensive marketing automation platform with multi-tenant architecture',
    thumbnailUrl: '/projects/saas-platform.jpg',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Stripe'],
  },
];
