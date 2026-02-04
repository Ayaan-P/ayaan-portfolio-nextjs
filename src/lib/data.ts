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
  tools: ProfileSection[];
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
      aboutText: `

Currently building Dytto, an AI-powered journaling app that captures your daily life and builds a personal context layer — so any AI can know you the way your best friend does.`,
      date: "",
      imgSrc: "/images/profile.jpg",
      about: true,
      expandedDetails: {
        fullDescription: ` I bridge the gap between cutting-edge AI research and practical software applications. My journey began with a solid foundation in Computer Engineering at UIUC, where I developed a strong understanding of both hardware and software systems.

My professional experience spans from federal contracting work in Washington DC to biotech innovation, where I applied deep learning techniques to solve critical healthcare challenges. This diverse background has given me a unique perspective on how technology can be leveraged across different domains.

With a Master's in Artificial Intelligence from Northwestern University, I'm deepening my expertise in neural networks, computer vision, and natural language processing. My goal is to create intelligent systems that not only process data efficiently but also provide meaningful insights and enhance human experiences.

The culmination of my passion and expertise is Dytto, an AI-powered journaling app I founded that captures your daily experiences and transforms them into beautiful stories — while quietly building a personal context layer underneath. Dytto collects rich context (location, calendar, health, weather, preferences) and serves it via API to any AI agent, making every AI interaction instantly personalized. It's a journaling app on the surface and Plaid for personal context underneath.`,
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
          "Founded Dytto - AI journaling app and personal context platform",
          "Completed MS in AI at Northwestern University with 4.0 GPA",
          "Published research on drug-target interaction prediction"
        ]
      }
    }
  ],
  tools: [
    {
      id: 1,
      sectionTitle: "Tools & Resources",
      subtitle: "Project Management",
      aboutText: "Explore my workflow tools and productivity resources for managing projects.",
      date: "Ongoing",
      imgSrc: "/images/tools-icon.png",
      expandedDetails: {
        fullDescription: "Collection of tools and platforms I use for project management, organization, and workflow optimization.",
        skills: [
          "Project Management",
          "Team Collaboration",
          "Backlog Management",
          "Workflow Optimization",
          "Development Tools",
          "Productivity Systems"
        ],
        achievements: [
          "Streamlined project workflows",
          "Optimized team collaboration",
          "Built efficient development processes"
        ],
        links: [
          {
            label: "Backlog",
            url: "https://back-log.com"
          }
        ]
      }
    },
    {
      id: 2,
      sectionTitle: "Dytto",
      subtitle: "AI Journal & Context Platform",
      aboutText: "AI-powered journaling app that captures your life and builds a personal context layer — so any AI can know you.",
      date: "Ongoing",
      imgSrc: "/images/dytto-icon.png",
      expandedDetails: {
        fullDescription: "Dytto is an AI-powered journaling app that transforms how people capture and reflect on their daily experiences — while building a personal context layer underneath. It collects rich context (location, calendar, health, weather, preferences) and serves it via API, so any AI agent can deliver instantly personalized experiences. Journaling app on the surface, Plaid for personal context underneath.",
        skills: [
          "React & Next.js",
          "AI/ML Integration",
          "TypeScript",
          "Cloud Architecture",
          "Real-time Data Processing",
          "NLP & Context Analysis"
        ],
        achievements: [
          "AI-powered daily story generation from captured context",
          "Personal context API serving data to any AI agent",
          "Bidirectional: AI reads context and writes back what it learns"
        ],
        links: [
          {
            label: "Visit Dytto",
            url: "https://dytto.app"
          }
        ]
      }
    },
    {
      id: 3,
      sectionTitle: "dytto-gen",
      subtitle: "AI Content Marketplace",
      aboutText: "Platform where creators train AI models on their style and earn royalties from generated content.",
      date: "2024-2025",
      imgSrc: "/images/dytto-gen.png",
      expandedDetails: {
        fullDescription: "dytto-gen represents the future of creative collaboration between humans and AI. The platform enables digital creators to monetize their unique styles by training personalized AI models, while users gain access to diverse creative tools.\n\nThe system automatically handles model training, content generation, and royalty distribution, creating a sustainable ecosystem where creativity is rewarded. This addresses the growing concern about AI replacing artists by instead empowering them with new revenue streams.",
        skills: ["Next.js", "FastAPI", "Replicate", "Stripe", "Fine-tuning", "LoRA", "Image Generation", "Creator Economy"],
        achievements: ["Platform for creators to train AI models on their style", "Automated royalty distribution system", "70/30 creator-platform revenue split model"],
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
      id: 4,
      sectionTitle: "FundFish",
      subtitle: "AI-Powered Nonprofit Funding Discovery",
      aboutText: "AI-powered platform helping nonprofits discover funding opportunities and focus on what matters most: their mission.",
      date: "2025",
      imgSrc: "/images/fundfish.png",
      expandedDetails: {
        fullDescription: "FundFish is a smart, efficient system that acts as a digital scout for nonprofit fundraising teams. We proactively find and prioritize funding opportunities, transforming the grant discovery process from reactive and manual to proactive and data-driven.\n\nBy automating the tedious task of searching for relevant Requests For Proposals (RFPs) and matching them to your organization's mission, we save valuable time—previously estimated at over 20 hours per week per fundraiser.\n\nKey features include Intelligent Opportunity Discovery (AI agents continuously scan federal databases like Grants.gov and SAM.gov), Smart Match Scoring, AI-Powered Insights with winning strategies from similar past RFPs, and Document Intelligence that extracts key information from uploaded organizational documents.\n\nFundFish was born from a partnership between Per Scholas and Northwestern University's MBAi/MSAi capstone program in Fall 2025. Per Scholas CEO Plinio Ayala called it \"a potential game changer\" for how the organization operates. The project was selected for feature coverage by Northwestern University and presented at the 2025 Capstone Showcase.",
        skills: ["Next.js", "FastAPI", "Google Gemini", "Claude API", "Supabase", "RAG", "Document Intelligence", "Federal Grant APIs"],
        achievements: ["AI agents scanning Grants.gov and SAM.gov for opportunities", "Smart Match Scoring for nonprofit-RFP alignment", "Per Scholas CEO called it 'a potential game changer'", "Selected for Northwestern feature coverage"],
        links: [
          {
            label: "FundFish Platform",
            url: "https://fundfish.pro"
          }
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
        achievements: ["Graduated with 4.0/4.0 GPA", "FundFish capstone selected for feature coverage by Northwestern University", "Presented at 2025 Capstone Showcase"],
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
        achievements: ["Graduated December 2020", "Completed rigorous CompE curriculum covering hardware and software"]
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
        skills: ["Physics", "Mathematics", "Computer Science", "Chemistry"],
        achievements: ["Completed ISC Science curriculum with distinction"]
      }
    }
  ],
  work: [
    {
      id: 1,
      sectionTitle: "American Family Insurance",
      subtitle: "Software Engineer",
      aboutText: "Building software solutions in insurance technology, working on AI-driven applications for customer experience and risk assessment.",
      date: "June 2025 – Present",
      imgSrc: "/images/Boston.png",
      expandedDetails: {
        fullDescription: "At American Family Insurance, I work on software engineering initiatives leveraging AI and modern web technologies to enhance insurance products and customer experiences. Based in the Boston office, the role combines full-stack development with applied machine learning in a Fortune 300 company.",
        skills: ["Python", "TypeScript", "React", "Cloud Services (AWS)", "Machine Learning", "API Development", "Agile Development"],
        achievements: ["Building AI-driven insurance technology solutions", "Full-stack development on customer-facing platforms"]
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
        skills: ["Python", "PyTorch", "Computer Vision", "Medical Image Analysis", "Deep Learning", "Convolutional Neural Networks", "Transfer Learning", "Data Augmentation"],
        achievements: ["Developed AI models for early cancer detection with 85%+ accuracy", "Built medical image classification pipelines for clinical use", "Published research on drug-target interaction prediction"]
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
        skills: ["Java", "Spring Boot", "Angular", "PostgreSQL", "AWS", "Docker", "REST APIs", "Agile/Scrum", "CI/CD", "Federal Security Compliance"],
        achievements: ["Built scalable web applications serving thousands of federal users at FAA and GSA", "Developed and maintained mission-critical government systems", "Implemented CI/CD pipelines improving deployment efficiency"]
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
        skills: ["Java", "SQL", "Payment Processing", "REST APIs", "Testing"],
        achievements: ["Contributed to payment gateway handling millions of daily transactions", "Gained exposure to fintech infrastructure in Middle East markets"],
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
      sectionTitle: "dytto - AI Journal & Context Platform",
      subtitle: "Your Story, Your Context, Your AI Personalized",
      aboutText: "AI-powered journaling app that captures your daily life into beautiful stories — and builds a personal context layer that makes every AI you use smarter.",
      date: "2025",
      imgSrc: "/images/logo.png",
      expandedDetails: {
        fullDescription: "dytto is an AI-powered journaling app that automatically captures your daily experiences and transforms them into meaningful narratives — while quietly building a personal context layer underneath. It collects location, calendar, health, weather, and preference data, then serves it via API so any AI agent can deliver instantly personalized experiences.",
        skills: ["Flask", "Python", "Supabase", "pgvector", "Google Gemini", "Swift/iOS", "React Native", "NLP", "Vector Embeddings"],
        achievements: ["AI-powered daily story generation and journaling", "Personal context API serving any AI agent", "Built semantic search over personal memories using pgvector", "Live on App Store with active users"],
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
        skills: ["Python", "PyTorch", "Molecular Fingerprinting", "Graph Neural Networks", "Scikit-learn", "RDKit"],
        achievements: ["Built ML pipeline predicting drug-target binding affinity", "Published research paper on DTI prediction methods"],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/dti-prediction"
          },
          {
            label: "Research Paper",
            url: "https://github.com/Ayaan-P/dti-prediction"
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
        skills: ["Python", "PyTorch", "GANs", "Medical Imaging", "DICOM Processing", "Image Super-Resolution"],
        achievements: ["GAN-based model enhancing low-dose CT quality", "Reduced noise while preserving diagnostic detail", "Demonstrated potential for 50%+ radiation dose reduction"],
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
        skills: ["Python", "Diffusion Models", "Stable Diffusion", "Flask", "JavaScript", "Fine-tuning", "Image Generation"],
        achievements: ["Trained diffusion model on Minecraft 16x16 texture format", "Built web interface for on-demand texture generation", "Demonstrated AI-assisted game asset creation pipeline"],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/mctexture"
          },
          {
            label: "Live Demo",
            url: "https://github.com/Ayaan-P/mctexture"
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
        skills: ["Python", "Scikit-learn", "Pandas", "Data Visualization", "Gradient Boosting", "Feature Engineering", "Urban Analytics"],
        achievements: ["ML model predicting Chicago building energy ratings", "Analyzed patterns across thousands of buildings", "Tool for architects to optimize designs pre-construction"],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/Ayaan-P/chicago-energy"
          },
          {
            label: "Interactive Demo",
            url: "https://github.com/Ayaan-P/chicago-energy"
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
        skills: ["Unity", "C#", "Pixel Art", "Game Design", "Object-Oriented Programming", "State Management", "2D Animation"],
        achievements: ["Complete game with turn-based combat system", "Custom pixel art assets created from scratch", "Multiple interconnected game systems (inventory, progression, exploration)"]
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
        skills: ["Python", "LLMs", "Prompt Engineering", "Statistical Analysis", "Experimental Design", "OpenAI API", "Research Methods"],
        achievements: ["Tool for simulating social science experiments using LLMs", "Enables large-scale hypothesis testing at fraction of cost", "Collaborative research project at Northwestern"],
        links: [
          {
            label: "Project Repository",
            url: "https://github.com/HarryL-Git/Social-Science-Replications-using-LLMs"
          },
          {
            label: "Research Paper",
            url: "https://github.com/HarryL-Git/Social-Science-Replications-using-LLMs"
          }
        ]
      }
    }
  ]
};

export const personalInfo = {
  name: "Ayaan Pupala",
  title: "AI Engineer & Product Builder",
  email: "ayaansp@gmail.com",
  location: "Cambridge, MA",
  website: "https://ayaanpupala.com",
  social: {
    linkedin: "https://linkedin.com/in/ayaanpupala",
    github: "https://github.com/Ayaan-P",
    twitter: "https://twitter.com/ayaanpupala"
  }
};