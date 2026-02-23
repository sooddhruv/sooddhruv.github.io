export const content = {
  name: "Dhruv Sood",
  status: "Graduated from New York University (NYU)",
  targetRoles: ["Data Scientist", "Applied AI", "Analytics Engineer", "Machine Learning Engineer"],
  email: "ds7403@nyu.edu",
  links: {
    linkedin: "https://www.linkedin.com/in/sooddhruv2",
    github: "https://github.com/sooddhruv",
    oldPortfolio: "https://sooddhruv.github.io/"
  },
  hero: {
    headline: "Dhruv Sood",
    subheadline: "Data Scientist building LLM-driven analytics",
    primaryLine: "I build data-driven products and analytics systems that ship and deliver measurable business impact.",
    openToLine: "Exploring Data Scientist and Applied AI roles."
  },
  about: {
    paragraph: "With a strong technical and analytical foundation elevated by my Master's in Information Systems from NYU, I specialize in transforming complex data into actionable insights and robust products. I am highly adaptable and performance-driven, consistently focused on delivering measurable business impact.",
    bullets: [
      "Master's in Information Systems from New York University (NYU)",
      "10+ impactful projects across Data Science, Analytics, and Engineering",
      "2 published research papers in peer-reviewed journals",
      "Strong programming background with expertise in Python, C++, and SQL",
      "Proven ability to build and deploy LLM-driven autonomous agents and ML models",
      "Track record of reducing operational costs and improving decision-making speed"
    ]
  },
  education: [
    {
      institution: "New York University (NYU)",
      degree: "Master’s, Information Systems",
      status: "Graduated",
      logo: "/logos/nyu.png"
    },
    {
      institution: "Vellore Institute of Technology (VIT)",
      degree: "Bachelor’s, Information Technology",
      status: "Graduated",
      logo: "/logos/vit.png"
    },
    {
      institution: "Senior Schooling",
      degree: "High School",
      status: "Completed",
      logo: "/logos/school.svg"
    }
  ],
  research: [
    {
      title: "Pro Lens – Enhancing User Experience: A Computer Vision Application for Warning Light Recognition",
      status: "Under Review",
      details: "Submitted to Ernst & Young for final review. A Flutter + ML app that scans objects via camera, identifies using YOLO, and opens related user manuals."
    },
    {
      title: "A Performance Enhancement of Deepfake Video Detection through the use of a Hybrid CNN Deep Learning Model",
      publication: "Feb 2023",
      journal: "International Journal of Electrical and Computer Engineering Systems, Volume 14 No.2",
      details: "Hybrid CNN using InceptionResnet v2 + Xception; DFDC dataset. Precision 0.985, recall 0.96, f1 0.98, support 0.968."
    },
    {
      title: "Image Steganography Using CNN",
      publication: "Feb 2022",
      journal: "International Research Journal of Engineering and Technology, Volume 09 Issue 02",
      details: "Hide an image inside another more efficiently using a Convolutional Neural Network approach."
    }
  ],
  projects: [
    {
      id: "realtime-alertvision",
      title: "RealTime AlertVision",
      year: "2023",
      problem: "Need for real-time identification of warning lights and corresponding manual retrieval.",
      approach: "Developed a Flutter + ML computer vision app that scans via camera and identifies using YOLOv8 to open related user manuals.",
      tools: ["Flutter", "YOLOv8", "Machine Learning", "Computer Vision"],
      outcome: "Successfully integrated real-time detection. (Code cannot be shared due to NDA)",
      links: { github: "", live: "" },
      tags: ["Computer Vision", "Data Science"],
      thumbnail: "/projects/thumbnails/cv.png"
    },
    {
      id: "image-steganography",
      title: "Image Steganography",
      year: "2022",
      problem: "Securely hiding information within images without perceptible changes.",
      approach: "CNN-based approach to hide one image inside another; encoder chooses optimal concealment locations; decoder extracts hidden image.",
      tools: ["Python", "CNN", "Deep Learning"],
      outcome: "Achieved imperceptible modifications with high extraction accuracy.",
      links: { github: "https://github.com/sooddhruv", live: "" },
      tags: ["Computer Vision", "Data Science"],
      thumbnail: "/projects/thumbnails/cv.png"
    },
    {
      id: "deepfake-detection",
      title: "Deepfake Detection",
      year: "2022",
      problem: "Increasing prevalence of highly realistic deepfake videos requiring robust detection.",
      approach: "Built an ensemble of InceptionV2 + Xception models to detect deepfakes.",
      tools: ["Python", "InceptionV2", "Xception", "Deep Learning"],
      outcome: "Achieved 98% accuracy on the DFDC dataset.",
      links: { github: "https://github.com/sooddhruv", live: "" },
      tags: ["Data Science", "Computer Vision"],
      thumbnail: "/projects/thumbnails/cv.png"
    },
    {
      id: "real-estate-dbms",
      title: "Real Estate Database Management System",
      year: "2020",
      problem: "Inefficient property listing and management processes.",
      approach: "Developed a robust property listing management system with input/update/search capabilities, data visualization, and security.",
      tools: ["SQL", "Database Management", "Data Visualization"],
      outcome: "Streamlined property management and improved data accessibility.",
      links: { github: "https://github.com/sooddhruv", live: "" },
      tags: ["Systems/SDE", "Analytics/BI"],
      thumbnail: "/projects/thumbnails/systems.png"
    },
    {
      id: "predicting-trends-ethical-consumerism",
      title: "Predicting Trends in Ethical Consumerism",
      year: "2024",
      problem: "Understanding sentiment-driven patterns related to ESG opinions and their market impact.",
      approach: "Python pipeline scraping Reddit via PRAW. Sentiment analysis with VADER + TextBlob. Aligned sentiment with stock price movements via yfinance.",
      tools: ["Python", "PRAW", "VADER", "TextBlob", "yfinance"],
      outcome: "Successfully detected sentiment-driven patterns related to ESG opinions.",
      links: { github: "https://github.com/sooddhruv", live: "" },
      tags: ["Data Science", "Analytics/BI"],
      thumbnail: "/projects/thumbnails/analytics.png"
    }
  ],
  moreProjects: [
    { title: "Mastering Project Management Of A Product: From Idea to Fulfillment", year: "2022", icon: "document" },
    { title: "A Comprehensive Marketing Plan Development for Better Growth of Company", year: "2022", icon: "chart" },
    { title: "Decentralized Chat Application", year: "2022", icon: "database" },
    { title: "Live Weapon detection", year: "2022", icon: "camera" },
    { title: "Analysis of HR Management Practices in Pre, In, and Post Covid in a Blockchain-based company", year: "2022", icon: "chart" },
    { title: "Sign Language Recognition Using Machine Learning", year: "2021", icon: "camera" },
    { title: "Software Testing", year: "2021", icon: "document" },
    { title: "Providing Security to Cloud Data using HoneyPot Server", year: "2021", icon: "database" },
    { title: "Intrusion Detection System Using Machine Learning Algorithms", year: "2020", icon: "database" },
    { title: "A Fully Functioning E-Commerce Website Using PHP For Backend", year: "2020", icon: "document" },
    { title: "NGO Platform With Aim To Connect People And Provide Care Through The NGO’s Services", year: "2020", icon: "document" }
  ],
  experience: [
    {
      company: "SQOR.ai",
      role: "Data Scientist",
      period: "Aug 2024 – Present",
      bullets: [
        "Built and deployed LLM-driven autonomous agents for KPI forecasting, anomaly detection, and real-time risk alerts, improving decision-making speed by 40% and driving 15% higher operational efficiency across enterprise datasets",
        "Designed data pipelines integrating 70+ sources to unify 500+ KPIs, reducing manual reporting by 60%",
        "Developed RAG-based querying and reporting modules, reducing request time by 75% and enabling contextual business insights"
      ],
      tags: ["LLM Agents", "RAG", "Forecasting", "Pipelines", "KPI Systems", "Enterprise Analytics"],
      logo: "/logos/sqor.jpg"
    },
    {
      company: "Dassault Systèmes",
      role: "Data Scientist / ML Engineer",
      period: "Previous",
      bullets: [
        "Predictive maintenance model reduced downtime and costs by 15%",
        "99% accuracy ML model using class rebalancing and A/B testing",
        "ETL on large sensor datasets for machine failure prediction",
        "Statistical analysis with Pipeline Pilot, improving model accuracy by 20%"
      ],
      tags: ["Predictive Maintenance", "ETL", "Machine Learning", "Pipeline Pilot"],
      logo: "/logos/dassault.png"
    },
    {
      company: "Ernst & Young",
      role: "Computer Vision Engineer",
      period: "Previous",
      bullets: [
        "YOLOv7 model for warning signal lights in car dashboards, 98% accuracy",
        "Bagging and varied backbone architectures",
        "Integrated into mobile app, improved real-time detection accuracy by 30%",
        "Testing suites + agile processes: bugs down 40%, user satisfaction up 25%"
      ],
      tags: ["YOLOv7", "Computer Vision", "Mobile Integration", "Agile"],
      logo: "/logos/ey.png"
    },
    {
      company: "Zamroo: The Selling Application",
      role: "QA & Technical Support",
      period: "Previous",
      bullets: [
        "Mobile app test plans with TestRail and Appium",
        "Technical support for 50-member team using JIRA and Agile",
        "EDA and automated data collection",
        "30% decrease in post-release issues, 15% increase in project development responsiveness"
      ],
      tags: ["TestRail", "Appium", "JIRA", "EDA"],
      logo: "/logos/zamroo.png"
    },
    {
      company: "Coding Ninjas",
      role: "C++ Teaching Assistant",
      period: "6 months, completed Jan 2022",
      bullets: [
        "Mentored students in C++ programming and data structures",
        "Resolved technical queries and assisted in debugging code"
      ],
      tags: ["C++", "Teaching", "Mentoring"]
    }
  ],
  skillsByCategory: [
    {
      category: "Languages",
      skills: ["C++", "Python", "SQL", "Java"]
    },
    {
      category: "Data/ML",
      skills: ["Machine Learning", "Computer Vision", "LLMs", "RAG", "Forecasting"]
    },
    {
      category: "Dev",
      skills: ["Web Development", "Flutter", "ETL", "Pipelines"]
    },
    {
      category: "Product/PM",
      skills: ["Project Management", "Agile", "JIRA"]
    }
  ],
  certifications: [
    {
      name: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company (McKinsey.org)",
      issued: "Dec 2025",
      skills: ["Problem Solving"],
      credentialId: "",
      credentialUrl: "#",
      logo: "/logos/Mckinsey.png"
    },
    {
      name: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft",
      issued: "Jul 2025",
      credentialId: "32FFMYSHS191",
      skills: ["Microsoft Power BI", "DAX", "Data Modeling", "Data Analysis"],
      credentialUrl: "#",
      logo: "/logos/MSFT.png"
    },
    {
      name: "Google Data Analytics",
      issuer: "Google",
      issued: "Jun 2025",
      credentialId: "2TL7Q5DTZM18",
      skills: ["Data Cleaning", "Data Visualization", "SQL", "R Programming"],
      credentialUrl: "#",
      logo: "/logos/Google.png"
    }
  ]
};
