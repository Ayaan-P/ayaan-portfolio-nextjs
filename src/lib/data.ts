export interface ProfileSection {
  id: number;
  sectionTitle: string;
  subtitle?: string;
  aboutText: string;
  date: string;
  imgSrc: string;
  about?: boolean;
  expandedDetails?: {
    fullDescription: string;
    skills: string[];
    achievements: string[];
    links?: {
      label: string;
      url: string;
    }[];
  };
}

interface ProfileData {
  about: ProfileSection[];
  education: ProfileSection[];
  work: ProfileSection[];
  projects: ProfileSection[];
}

export type ProfileSectionKey = keyof ProfileData;

export const profileData: ProfileData = {
  about: [
    {
      id: 1,
      sectionTitle: "",
      aboutText: `Hi, I'm Ayaan, a software/AI engineer and founder passionate about building products that make life easier and more insightful.

I studied Computer Engineering at UIUC, worked as a federal contractor in DC, and later joined a biotech startup developing deep learning models for early cancer detection. Now, I'm pursuing my Master's in AI at Northwestern.

I'm fascinated by how AI can enhance everyday experiences. This led me to create dytto, an AI-driven journaling app that seamlessly captures and analyzes daily life.`,
      date: "",
      imgSrc: "/images/profile.jpg",
      about: true,
      expandedDetails: {
        fullDescription: ` I bridge the gap between cutting-edge AI research and practical software applications. My journey began with a solid foundation in Computer Engineering at UIUC, where I developed a strong understanding of both hardware and software systems.

My professional experience spans from federal contracting work in Washington DC to biotech innovation, where I applied deep learning techniques to solve critical healthcare challenges. This diverse background has given me a unique perspective on how technology can be leveraged across different domains.

Currently pursuing advanced studies in Artificial Intelligence at Northwestern University, I'm deepening my expertise in neural networks, computer vision, and natural language processing. My goal is to create intelligent systems that not only process data efficiently but also provide meaningful insights and enhance human experiences.

The culmination of my passion and expertise is dytto, an AI-powered journaling application I founded that transforms how people capture and reflect on their daily experiences. By automating the collection of contextual data and generating personalized narratives, dytto makes journaling effortless while creating a rich, searchable memory bank that grows more valuable over time.`,
        skills: [
          "Full Stack Development (React, Node.js, TypeScript)",
          "Machine Learning & Deep Learning (PyTorch, TensorFlow)",
          "Computer Vision & Image Processing",
          "Natural Language Processing",
          "Product Design & Development",
          "AI Application Architecture",
          "Cloud Computing (AWS, GCP)",
          "Database Design & Optimization"
        ],
        achievements: [
          "Developed AI models for early cancer detection with 85%+ accuracy",
          "Built scalable web applications serving thousands of federal users",
          "Founded dytto - AI-powered journaling platform",
          "Maintaining 4.0 GPA in Northwestern's AI Master's program",
          "Published research on drug-target interaction prediction"
        ]
      }
    }
  ],
  education: [
    {
      id: 1,
      sectionTitle: "Northwestern University",
      subtitle: "Master of Science in Artificial Intelligence",
      aboutText: "Advanced degree in AI with focus on deep learning, computer vision, and natural language processing.",
      date: "September 2024 - December 2025",
      imgSrc: "/images/Northwestern.png",
      expandedDetails: {
        fullDescription: "Northwestern's AI Master's program provides comprehensive training in cutting-edge artificial intelligence technologies. The curriculum combines theoretical foundations with practical applications, preparing students to tackle real-world AI challenges across various industries.",
        skills: [
          "Deep Neural Networks & Architectures",
          "Natural Language Processing",
          "Computer Vision & Image Recognition",
          "Reinforcement Learning",
          "AI Ethics & Responsible AI",
          "Machine Learning Theory",
          "Statistical Learning Methods",
          "AI System Design"
        ],
        achievements: [
          "Current GPA: 4.0/4.0",
          "Teaching Assistant for Machine Learning course",
          "Research focus on generative AI applications"
        ],
        links: [
          {
            label: "Northwestern AI Program",
            url: "https://www.mccormick.northwestern.edu/artificial-intelligence/"
          }
        ]
      }
    },
    {
      id: 2,
      sectionTitle: "University of Illinois at Urbana-Champaign",
      subtitle: "Bachelor of Science in Computer Engineering",
      aboutText: "Comprehensive education in Computer Engineering covering hardware and software fundamentals.",
      date: "August 2017 - December 2020",
      imgSrc: "/images/uiuc.png",
      expandedDetails: {
        fullDescription: "UIUC's Computer Engineering program provided a rigorous foundation in both computer science and electrical engineering. The curriculum emphasized problem-solving, system design, and practical application of theoretical concepts.",
        skills: [
          "Data Structures & Algorithms",
          "Computer Architecture & Organization",
          "Digital Signal Processing",
          "Software Engineering Principles",
          "Database Systems",
          "Operating Systems",
          "Network Programming",
          "Embedded Systems"
        ],
        achievements: [
          "Dean's List multiple semesters",
          "Completed senior capstone project on IoT systems",
          "Active member of IEEE student chapter"
        ]
      }
    },
    {
      id: 3,
      sectionTitle: "Cathedral and John Connon School",
      subtitle: "ICSE, ISC Science",
      aboutText: "Secondary education with focus on Science and Mathematics.",
      date: "May 2017",
      imgSrc: "/images/Cathedral.png",
      expandedDetails: {
        fullDescription: "Cathedral School provided excellent preparation for higher education with emphasis on critical thinking, scientific methodology, and academic excellence.",
        skills: [
          "Critical Thinking",
          "Scientific Methodology",
          "Mathematics",
          "Academic Excellence",
          "Science Competitions"
        ],
        achievements: [
          "Top 5% of graduating class",
          "Science Olympiad participant",
          "Mathematics competition winner"
        ]
      }
    }
  ],
  work: [
    {
      id: 1,
      sectionTitle: "American Family Insurance",
      subtitle: "Software Engineering Intern",
      aboutText: "Upcoming summer internship focusing on innovative software solutions in insurance technology.",
      date: "June 2025 - August 2025",
      imgSrc: "/images/Boston.png",
      expandedDetails: {
        fullDescription: "This internship will focus on leveraging modern software development practices and AI technologies to enhance insurance products and customer experiences.",
        skills: [
          "Full Stack Development",
          "Cloud Computing (AWS/Azure)",
          "Data Analytics & Visualization",
          "Insurance Technology (InsurTech)",
          "API Development",
          "Microservices Architecture"
        ],
        achievements: [
          "Selected from competitive applicant pool",
          "Project focus on AI-enhanced customer service"
        ]
      }
    },
    {
      id: 2,
      sectionTitle: "Epigeneres Biotech",
      subtitle: "Machine Learning Engineer",
      aboutText: "Developed deep learning models for early cancer detection using medical imaging data.",
      date: "October 2023 - August 2024",
      imgSrc: "/images/epigen.png",
      expandedDetails: {
        fullDescription: "At Epigeneres, I worked on cutting-edge AI applications in healthcare, specifically focusing on early cancer detection through advanced image analysis. This role combined my technical skills with meaningful impact in medical technology.",
        skills: [
          "Deep Learning (PyTorch, TensorFlow)",
          "Medical Image Analysis",
          "Computer Vision",
          "Data Pipeline Development",
          "Model Optimization & Deployment",
          "Healthcare Compliance (HIPAA)",
          "Statistical Analysis",
          "Research & Development"
        ],
        achievements: [
          "Improved model accuracy by 15% through novel architecture design",
          "Reduced inference time by 40% through optimization techniques",
          "Contributed to 2 research publications",
          "Developed automated data preprocessing pipeline"
        ]
      }
    },
    {
      id: 3,
      sectionTitle: "Karsun Solutions LLC",
      subtitle: "Software Engineer",
      aboutText: "Developed large-scale web applications for federal agencies including FAA and GSA.",
      date: "March 2021 - September 2023",
      imgSrc: "/images/Washington.png",
      expandedDetails: {
        fullDescription: "As a Software Engineer at Karsun Solutions, I worked on critical government systems that serve millions of users. My role involved full-stack development, system architecture, and ensuring compliance with federal security standards.",
        skills: [
          "Enterprise Application Development",
          "React.js & Node.js",
          "Cloud Migration (AWS)",
          "Agile Development Methodologies",
          "RESTful API Design",
          "Database Design (PostgreSQL, MongoDB)",
          "Security Compliance (FedRAMP)",
          "DevOps & CI/CD"
        ],
        achievements: [
          "Led migration of legacy FAA system to modern cloud architecture",
          "Improved system performance by 60% through optimization",
          "Mentored 3 junior developers",
          "Received 'Outstanding Performance' award 2 consecutive years"
        ]
      }
    },
    {
      id: 4,
      sectionTitle: "Network International LLC",
      subtitle: "Software Engineering Intern",
      aboutText: "Contributed to payment processing systems for Middle East and Africa's leading payment provider.",
      date: "May 2018 - July 2018",
      imgSrc: "/images/Network.png",
      expandedDetails: {
        fullDescription: "This internship provided valuable exposure to fintech and payment processing systems. I worked on critical components of payment gateways that handle millions of transactions daily.",
        skills: [
          "Payment Gateway Integration",
          "Financial Transaction Processing",
          "API Development & Testing",
          "Security Protocols",
          "Database Management",
          "Quality Assurance"
        ],
        achievements: [
          "Developed automated testing suite for payment APIs",
          "Contributed to PCI DSS compliance initiatives",
          "Optimized transaction processing speed by 25%"
        ],
        links: [
          {
            label: "Network International",
            url: "https://networkinternational.ae"
          }
        ]
      }
    }
  ],
  projects: [
    {
      id: 1,
      sectionTitle: "dytto - AI Memory Assistant",
      subtitle: "Personal Journal & Story Generation Platform",
      aboutText: "AI-powered journaling app that transforms daily experiences into meaningful stories using advanced language models and voice interaction.",
      date: "2025",
      imgSrc: "/images/logo.png",
      expandedDetails: {
        fullDescription: "dytto is a sophisticated AI-powered personal journal that automatically captures and transforms your daily experiences into meaningful narratives.",
        skills: [
          "React Native/Expo",
          "TypeScript",
          "Python/FastAPI",
          "PostgreSQL/Supabase",
          "Gemini 2.0 Flash",
          "ElevenLabs Conversational AI",
          "Vector Embeddings (pgvector)",
          "Firebase Push Notifications",
          "RESTful API Design"
        ],
        achievements: [
          "Implemented advanced vector search with semantic memory retrieval",
          "Created comprehensive context analysis system with behavioral patterns",
          "Deployed scalable backend architecture handling real-time AI processing",
          "Achieved seamless voice-to-text integration with natural conversation flow"
        ],
        links: [
          {
            label: "App Landing Page",
            url: "https://dytto.app"
          },
          {
            label: "TestFlight Beta",
            url: "https://testflight.apple.com/join/zPhFJzsr"
          }
        ]
      }
    },
    {
      id: 2,
      sectionTitle: "Drug Target Interaction Prediction",
      subtitle: "ML for Drug Discovery",
      aboutText: "ML model analyzing chemical structures to predict drug-target interactions, accelerating drug discovery.",
      date: "2024",
      imgSrc: "/images/DTI.png",
      expandedDetails: {
        fullDescription: "This project addresses one of the most challenging problems in pharmaceutical research: predicting how drugs will interact with biological targets. By leveraging machine learning on molecular data, the system can identify potential drug candidates much faster than traditional methods.",
        skills: [
          "XGBoost & Ensemble Methods",
          "Molecular Feature Engineering",
          "SMILES Chemical Notation",
          "Bioinformatics",
          "Python Scientific Stack",
          "Data Preprocessing",
          "Model Validation"
        ],
        achievements: [
          "Achieved 85% prediction accuracy on benchmark datasets",
          "Processed over 100,000 drug-target pairs",
          "Implemented novel feature extraction techniques",
          "Contributed to open-source drug discovery tools"
        ],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/dti-prediction"
          },
          {
            label: "Research Paper",
            url: "#"
          }
        ]
      }
    },
    {
      id: 3,
      sectionTitle: "CT Scan Enhancement",
      subtitle: "Medical Image Super-Resolution",
      aboutText: "GAN-based model enhancing low-dose CT scan quality while reducing radiation exposure.",
      date: "2024",
      imgSrc: "/images/CT.png",
      expandedDetails: {
        fullDescription: "This project addresses a critical challenge in medical imaging: balancing image quality with patient safety. Low-dose CT scans reduce radiation exposure but often suffer from noise and reduced resolution. Our GAN-based approach enhances these images to diagnostic quality.",
        skills: [
          "Generative Adversarial Networks (GANs)",
          "Medical Image Processing",
          "Deep Learning (PyTorch)",
          "Computer Vision",
          "Healthcare Applications",
          "Image Enhancement",
          "DICOM Processing"
        ],
        achievements: [
          "Improved image quality metrics by 40%",
          "Reduced noise while preserving diagnostic features",
          "Validated on clinical CT datasets",
          "Potential for real-world medical deployment"
        ],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/ct-enhancement"
          }
        ]
      }
    },
    {
      id: 4,
      sectionTitle: "Minecraft Texture Generator",
      subtitle: "AI-Powered Game Assets",
      aboutText: "Web app using diffusion models to generate Minecraft textures with label-based creation.",
      date: "2024",
      imgSrc: "/images/minecraft-texture-generator.png",
      expandedDetails: {
        fullDescription: "This project demonstrates the application of diffusion models to game asset creation. By training on Minecraft's distinctive 16x16 texture format, the model learns to generate new textures that maintain the game's aesthetic while providing creative variations.\n\nThe web interface allows users to browse generated textures, select from available labels, and create new textures on demand. This showcases how AI can assist game developers and modders in creating consistent, high-quality assets.",
        skills: [
          "Flask Web Framework",
          "PyTorch Diffusion Models",
          "Computer Vision",
          "Web Development",
          "Game Asset Pipeline",
          "Image Processing",
          "Model Deployment"
        ],
        achievements: [
          "Successfully trained diffusion model on game textures",
          "Created intuitive web interface for non-technical users",
          "Achieved high-quality 16x16 texture generation",
          "Implemented real-time generation capabilities"
        ],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/mctexture"
          },
          {
            label: "Live Demo",
            url: "#"
          }
        ]
      }
    },
    {
      id: 5,
      sectionTitle: "Chicago Energy Predictor",
      subtitle: "Urban Sustainability Analytics",
      aboutText: "ML system predicting building energy ratings to optimize designs for sustainability.",
      date: "2024",
      imgSrc: "/images/Chicago.png",
      expandedDetails: {
        fullDescription: "The Chicago Energy Rating Predictor addresses urban sustainability by helping architects and developers optimize building designs for energy efficiency. By analyzing patterns in existing buildings, the model can predict how new constructions will perform under Chicago's energy rating system.\n\nThis tool enables data-driven decisions in the design phase, potentially saving significant energy costs and reducing environmental impact. The model considers factors like building orientation, materials, HVAC systems, and neighborhood characteristics.",
        skills: [
          "Regression Modeling",
          "Feature Engineering",
          "Ensemble Learning Methods",
          "Urban Data Analysis",
          "Geospatial Analytics",
          "Sustainability Metrics",
          "Data Visualization"
        ],
        achievements: [
          "Achieved 92% accuracy in energy rating prediction",
          "Analyzed 50,000+ Chicago building records",
          "Identified key factors affecting energy efficiency",
          "Created actionable insights for architects"
        ],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/chicago-energy"
          },
          {
            label: "Interactive Demo",
            url: "#"
          }
        ]
      }
    },
    {
      id: 6,
      sectionTitle: "2D Pokémon Game",
      subtitle: "Unity Game Development",
      aboutText: "Complete 2D game in Unity with turn-based combat and custom pixel art.",
      date: "2020",
      imgSrc: "/images/Cliff.png",
      expandedDetails: {
        fullDescription: "This project showcases comprehensive game development skills through creating a complete Pokémon-inspired experience. The game features multiple interconnected systems including combat mechanics, character progression, inventory management, and world exploration.\n\nBuilt entirely in Unity with custom C# scripts, the game demonstrates understanding of object-oriented programming, game state management, and user experience design. All pixel art assets were created specifically for this project.",
        skills: [
          "Unity Game Engine",
          "C# Programming",
          "2D Animation & Sprites",
          "Game Design Principles",
          "Turn-based Combat Systems",
          "Pixel Art Creation",
          "Audio Integration",
          "UI/UX Design"
        ],
        achievements: [
          "Completed full game with 10+ hours of content",
          "Implemented complex battle system with 20+ moves",
          "Created 50+ original pixel art assets",
          "Designed balanced progression system"
        ],
        links: [
          {
            label: "Gameplay Video",
            url: "#"
          },
          {
            label: "Download Game",
            url: "#"
          }
        ]
      }
    },
    {
      id: 7,
      sectionTitle: "dytto-gen",
      subtitle: "AI Content Marketplace",
      aboutText: "Platform where creators train AI models on their style and earn royalties from generated content.",
      date: "2024-2025",
      imgSrc: "/images/logo.png",
      expandedDetails: {
        fullDescription: "dytto-gen represents the future of creative collaboration between humans and AI. The platform enables digital creators to monetize their unique styles by training personalized AI models, while users gain access to diverse creative tools.\n\nThe system automatically handles model training, content generation, and royalty distribution, creating a sustainable ecosystem where creativity is rewarded. This addresses the growing concern about AI replacing artists by instead empowering them with new revenue streams.",
        skills: [
          "Generative AI (Stable Diffusion, GPT)",
          "Machine Learning Model Training",
          "Full Stack Development",
          "Blockchain/Smart Contracts",
          "Payment Processing",
          "Cloud Infrastructure",
          "API Development",
          "Content Management Systems"
        ],
        achievements: [
          "Successfully deployed MVP with 100+ beta users",
          "Implemented automated royalty distribution system",
          "Created seamless model training pipeline",
          "Established partnerships with digital artists"
        ],
        links: [
          {
            label: "dytto-gen Platform",
            url: "https://dytto-gen.vercel.app/"
          },
          {
            label: "Creator Onboarding",
            url: "https://dytto-gen.vercel.app/creators"
          }
        ]
      }
    },
    {
      id: 8,
      sectionTitle: "Social Science Agent Replication",
      subtitle: "LLM Research Tool",
      aboutText: "Tool for simulating social science experiments using LLMs as agents for research replication.",
      date: "2025",
      imgSrc: "/images/ssarp.png",
      expandedDetails: {
        fullDescription: "This cutting-edge research tool addresses reproducibility challenges in social science by enabling large-scale simulation of human behavior studies. Using LLMs as proxies for human participants, researchers can quickly test hypotheses, explore parameter sensitivity, and validate findings.\n\nThe system supports complex experimental designs, automatic data collection, and statistical analysis. This approach could revolutionize social science research by making large-scale studies more accessible and cost-effective.",
        skills: [
          "Large Language Models (GPT, Claude)",
          "Social Science Methodology",
          "Experimental Design",
          "Statistical Analysis",
          "Python Data Science Stack",
          "Research Automation",
          "Behavioral Modeling"
        ],
        achievements: [
          "Successfully replicated 5 classic psychology experiments",
          "Achieved 85% correlation with original human studies",
          "Developed novel sensitivity analysis framework",
          "Contributed to academic research methodology"
        ],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/HarryL-Git/Social-Science-Replications-using-LLMs"
          },
          {
            label: "Research Paper",
            url: "#"
          }
        ]
      }
    }
  ]
};

export const personalInfo = {
  name: "Ayaan Pupala",
  title: "AI Engineer & Product Builder",
  email: "ayaan@example.com",
  location: "Chicago, IL",
  website: "https://ayaanpupala.com",
  social: {
    linkedin: "https://linkedin.com/in/ayaanpupala",
    github: "https://github.com/Ayaan-P",
    twitter: "https://twitter.com/ayaanpupala"
  }
};