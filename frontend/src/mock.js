export const portfolioData = {
  hero: {
    name: "Vishal Wadekar",
    role: "Full-Stack & AI Product Developer",
    tagline: "Building scalable web, mobile, and AI systems — from idea to production.",
    description: "Transforming complex ideas into production-ready solutions with enterprise-grade architecture."
  },
  about: {
    summary: "I specialize in building real client products that solve actual business problems. With expertise spanning web applications, mobile platforms, AI systems, and intelligent automation, I focus on delivering solutions that are not just functional, but scalable, performant, and business-ready. My approach combines clean architecture, modern UI/UX principles, and production-grade system design to create products that users love and businesses rely on."
  },
  skills: {
    categories: [
      {
        title: "Full-Stack Web Development",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "FastAPI", "REST APIs"]
      },
      {
        title: "Mobile App Development",
        skills: ["React Native", "Android & iOS", "Cross-platform", "Mobile UI/UX", "App Deployment", "Push Notifications"]
      },
      {
        title: "AI / LLM / SLM Systems",
        skills: ["Large Language Models", "Small Language Models", "AI Integration", "Prompt Engineering", "RAG Systems", "Vector Databases"]
      },
      {
        title: "Automation & Workflow Systems",
        skills: ["n8n Workflows", "MCP Systems", "Email Automation", "Data Processing", "Task Automation", "PyInstaller"]
      },
      {
        title: "Database Design",
        skills: ["Supabase", "PostgreSQL", "MongoDB", "Database Architecture", "Query Optimization", "Data Modeling"]
      },
      {
        title: "Cloud Deployment & Architecture",
        skills: ["AWS", "Docker", "CI/CD", "Scalable Systems", "Auto-scaling", "System Architecture"]
      },
      {
        title: "API Development & Integrations",
        skills: ["REST APIs", "WebSockets", "Third-party APIs", "Authentication", "JWT", "OAuth"]
      },
      {
        title: "Shopify Development",
        skills: ["Store Setup", "Theme Customization", "App Integrations", "Liquid Templates", "Shopify APIs", "E-commerce"]
      },
      {
        title: "Payment Gateway Integrations",
        skills: ["Stripe", "PayPal", "Payment Processing", "Subscription Systems", "Webhook Handling", "PCI Compliance"]
      },
      {
        title: "Enterprise Dashboards & Admin Systems",
        skills: ["Role-based Access", "Analytics Dashboards", "Data Visualization", "Admin Panels", "Reporting Systems", "Multi-tenant Architecture"]
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "NSH Platform",
      subtitle: "Web + Mobile App",
      category: "Full-Stack Application",
      problem: "Need for a comprehensive digital platform accessible across web and mobile devices with real-time data synchronization and scalable architecture for growing user base.",
      keyFeatures: [
        "Responsive web interface optimized for all devices",
        "Native mobile application for iOS and Android",
        "Real-time data synchronization across platforms",
        "User authentication and role-based access control",
        "Scalable backend architecture",
        "Performance-optimized for high traffic",
        "Cloud deployment with auto-scaling"
      ],
      technologies: ["React", "React Native", "Node.js", "Supabase", "PostgreSQL", "REST API", "JWT Auth", "AWS"],
      impact: "Successfully deployed to production serving real users with 99.9% uptime. Architecture designed to scale from hundreds to thousands of concurrent users.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      imageSlots: [
        { type: "mobile", label: "Mobile UI 1" },
        { type: "mobile", label: "Mobile UI 2" },
        { type: "mobile", label: "Mobile UI 3" },
        { type: "desktop", label: "Desktop UI 1" },
        { type: "desktop", label: "Desktop UI 2" },
        { type: "desktop", label: "Desktop UI 3" }
      ]
    },
    {
      id: 2,
      title: "Ellure NexHire",
      subtitle: "Recruitment Portal",
      category: "Enterprise System",
      problem: "Complex recruitment process requiring coordination between HR teams, recruiters, admins, and candidates with payment processing and comprehensive analytics.",
      keyFeatures: [
        "Multi-dashboard system (HR, Recruiter, Admin, Candidate)",
        "Advanced role-based access control with granular permissions",
        "Integrated payment gateway for recruitment fees",
        "Applicant tracking system with status workflows",
        "Document management and verification system",
        "Real-time notifications and email alerts",
        "Analytics dashboard with hiring metrics",
        "Interview scheduling and calendar integration"
      ],
      technologies: ["React", "FastAPI", "Supabase", "PostgreSQL", "Stripe", "Redux", "WebSockets", "Docker"],
      impact: "Complete recruitment ecosystem handling end-to-end hiring process. Reduced recruitment time by 40% with automated workflows and centralized communication.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
      imageSlots: [
        { type: "desktop", label: "Desktop UI 1" },
        { type: "desktop", label: "Desktop UI 2" },
        { type: "desktop", label: "Desktop UI 3" },
        { type: "desktop", label: "Desktop UI 4" }
      ]
    },
    {
      id: 3,
      title: "AI Resume Creator",
      subtitle: "ATS-Optimized Resume Generation",
      category: "AI System",
      problem: "Job seekers struggling to create ATS-friendly resumes tailored to specific job descriptions, resulting in missed opportunities due to resume screening filters.",
      keyFeatures: [
        "AI-powered resume generation using LLM technology",
        "Job description analysis and keyword extraction",
        "ATS optimization with industry-standard formatting",
        "Role-specific content generation and suggestions",
        "Multiple template options with customization",
        "Real-time preview and editing capabilities",
        "Export to PDF, DOCX, and plain text formats",
        "Section-wise regeneration and refinement"
      ],
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "NLP", "PDF Generation", "PostgreSQL"],
      impact: "Helped hundreds of candidates create professional, ATS-optimized resumes. Resume creation time reduced from hours to minutes with higher quality output.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800"
    },
    {
      id: 4,
      title: "Ellure Consultancy Services",
      subtitle: "Corporate Website",
      category: "Business Website",
      problem: "Need for a professional online presence that effectively communicates consultancy services and builds trust with enterprise clients.",
      keyFeatures: [
        "Professional corporate branding and design",
        "Service showcase with detailed descriptions",
        "Case studies and success stories section",
        "Contact and inquiry management system",
        "SEO-optimized content structure",
        "Mobile-responsive design",
        "Fast loading performance",
        "Lead capture and CRM integration"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "SEO Optimization", "Analytics Integration"],
      impact: "Created strong online presence resulting in increased inbound inquiries. Professional design establishing credibility with enterprise clients.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      imageSlots: [
        { type: "desktop", label: "Desktop UI 1" },
        { type: "desktop", label: "Desktop UI 2" },
        { type: "desktop", label: "Desktop UI 3" },
        { type: "desktop", label: "Desktop UI 4" }
      ]
    },
    {
      id: 5,
      title: "Sri Medical Mobile App",
      subtitle: "Medical Store Management",
      category: "Mobile Application",
      problem: "Local medical store needed digital solution to manage services, inventory, and customer interactions efficiently.",
      keyFeatures: [
        "Product catalog with search and filters",
        "Prescription upload and management",
        "Order tracking and notifications",
        "Customer profile management",
        "Inventory alerts and stock management",
        "Payment integration",
        "Push notifications for offers and updates"
      ],
      technologies: ["React Native", "Firebase", "Node.js", "Supabase", "PostgreSQL", "Push Notifications"],
      impact: "Digitized medical store operations improving customer service and operational efficiency. Enabled online ordering and better customer engagement.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
      imageSlots: [
        { type: "mobile", label: "Mobile UI 1" },
        { type: "mobile", label: "Mobile UI 2" }
      ]
    },
    {
      id: 6,
      title: "Vishvakarma Furnitures",
      subtitle: "E-commerce Website",
      category: "Business Website",
      problem: "Furniture business needed online platform for customers to explore catalog, customize orders, and connect with the business.",
      keyFeatures: [
        "Product gallery with high-quality images",
        "Category-based navigation",
        "Customization request forms",
        "Quote generation system",
        "Contact and inquiry management",
        "Responsive design for all devices",
        "Admin panel for catalog management"
      ],
      technologies: ["React", "Node.js", "Supabase", "PostgreSQL", "Cloudinary", "Email Integration"],
      impact: "Expanded business reach beyond local area. Enabled customers to browse catalog 24/7 and place custom orders online.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      imageSlots: [
        { type: "mobile", label: "Mobile UI 1" },
        { type: "mobile", label: "Mobile UI 2" }
      ]
    },
    {
      id: 7,
      title: "Hanuman Gym",
      subtitle: "Fitness Center Website",
      category: "Business Website",
      problem: "Local gym needed professional website to showcase facilities, trainers, and services to attract new members.",
      keyFeatures: [
        "Trainer profiles with specializations",
        "Facility showcase with image gallery",
        "Service packages and pricing display",
        "Membership inquiry forms",
        "Class schedules and timings",
        "Responsive mobile-first design",
        "Future-ready architecture for booking system"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL"],
      impact: "Created professional online presence for gym. Increased membership inquiries and provided easy access to gym information.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
    },
    {
      id: 8,
      title: "Email Automation System",
      subtitle: "Central Database Integration",
      category: "Automation Solution",
      problem: "Manual email processing causing delays and errors. Need for automated system to extract data from emails and centralize in database.",
      keyFeatures: [
        "Secure email reading with OAuth authentication",
        "Rule-based email filtering and categorization",
        "Automatic attachment download and processing",
        "Data extraction and structured storage",
        "Central database with search capabilities",
        "Windows executable for easy deployment",
        "REST API for external system integration",
        "Logging and error handling",
        "Scheduled automation with configurable intervals"
      ],
      technologies: ["Python", "IMAP Protocol", "PostgreSQL", "FastAPI", "Regex", "PyInstaller"],
      impact: "Production-ready system eliminating manual email processing. Saved 15+ hours per week of manual work with 100% accuracy in data extraction.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800",
      imageSlots: [
        { type: "desktop", label: "Desktop UI 1" },
        { type: "desktop", label: "Desktop UI 2" }
      ]
    },
    {
      id: 9,
      title: "FAQ SLM Chatbot",
      subtitle: "Enterprise Knowledge System",
      category: "AI System",
      problem: "Enterprise needed accurate, domain-specific chatbot for supply chain queries with training capabilities and multiple deployment options.",
      keyFeatures: [
        "Small Language Model trained on enterprise data",
        "Multi-file document upload for training",
        "Self-training from conversation history",
        "Manual training interface for refinement",
        "Intelligent autocomplete suggestions",
        "Context-aware suggested questions",
        "Downloadable conversation responses",
        "REST API for third-party integration",
        "Website embed code generation",
        "Windows executable for offline deployment",
        "High accuracy with domain-specific knowledge"
      ],
      technologies: ["Python", "Transformers", "FastAPI", "Vector Database", "React", "WebSocket", "PyInstaller", "PostgreSQL"],
      impact: "Highly accurate chatbot reducing customer support load by 60%. Seamless integration across platforms with consistent knowledge base.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
      imageSlots: [
        { type: "desktop", label: "Desktop UI 1" },
        { type: "desktop", label: "Desktop UI 2" }
      ]
    },
    {
      id: 10,
      title: "MCP Workflow System",
      subtitle: "Data Analysis & Visualization",
      category: "AI & Automation",
      problem: "Complex data analysis requiring intelligent processing, automated workflows, and visual insights generation.",
      keyFeatures: [
        "LLM-powered data analysis and insights",
        "n8n workflow integration for automation",
        "Interactive data visualization dashboards",
        "Automated report generation",
        "Multi-source data aggregation",
        "Natural language query interface",
        "Scheduled workflow execution",
        "Export capabilities for insights",
        "Real-time processing and updates"
      ],
      technologies: ["Python", "LLM APIs", "n8n", "React", "Chart.js", "FastAPI", "PostgreSQL"],
      impact: "Intelligent data analysis platform reducing analysis time by 70%. Automated insights generation enabling faster decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    }
  ],
  additionalCapabilities: [
    {
      title: "Multi-language Subtitles",
      description: "Advanced subtitle generation system supporting 50+ languages with accurate transcription and timing."
    },
    {
      title: "AI Voice Generation",
      description: "Multi-language AI audio and voice generation with natural-sounding speech synthesis."
    },
    {
      title: "Branding & Design",
      description: "Professional logo design and complete brand identity creation for businesses and products."
    }
  ],
  services: [
    {
      title: "Web & Mobile App Development",
      description: "Full-stack development of responsive web applications and native mobile apps with modern frameworks and scalable architecture.",
      icon: "Monitor"
    },
    {
      title: "AI & LLM-based Systems",
      description: "Integration of Large and Small Language Models for intelligent features, chatbots, content generation, and data analysis.",
      icon: "Brain"
    },
    {
      title: "Automation & Workflow Solutions",
      description: "Custom automation systems, email processing, data extraction, and n8n workflow implementations to streamline operations.",
      icon: "Workflow"
    },
    {
      title: "MVP Development",
      description: "Rapid prototyping and MVP development from idea to production-ready product with iterative approach.",
      icon: "Rocket"
    },
    {
      title: "Chatbot & API Integrations",
      description: "Intelligent chatbot development and seamless third-party API integrations for enhanced functionality.",
      icon: "MessageSquare"
    },
    {
      title: "Localization Services",
      description: "Multi-language subtitle generation, AI voice synthesis, and content localization for global reach.",
      icon: "Globe"
    }
  ],
  contact: {
    email: "vishal.wadekar@example.com",
    linkedin: "https://linkedin.com/in/vishalwadekar",
    github: "https://github.com/vishalwadekar"
  }
};
