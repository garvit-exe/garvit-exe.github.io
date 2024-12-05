export interface PortfolioConfig {
  name: string;
  role: string;
  about: string;
  bio: string;
  bio2?: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    tags: string[];
    link: string;
    link2?: string;
    imageUrl: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    period: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: number;
  }>;
  interests?: string[];
}

export const portfolioConfig: PortfolioConfig = {
  name: 'Garvit Budhiraja',
  role: 'Full Stack Developer',
  about: 'Computer Science Student at VIT Bhopal',
  bio: 'Helping people solve problems through code.',
  bio2: 'I\'ll help you transform your ideas into powerful digital solutions, delivering clean code and intuitive user experiences that drive real business results.',
  contact: {
    email: 'garvitbudhiraja02@gmail.com',
    github: 'https://github.com/garvit-exe',
    linkedin: 'https://linkedin.com/in/garvit-budhiraja',
    twitter: 'https://x.com/being_garvit',
  },
  experience: [
    {
      title: 'Co-Lead, Tech Team',
      company: 'BitByBit Club, VIT Bhopal University',
      period: '2024 - Present',
      description: '',
      highlights: [
        'Architected and implemented scalable microservices',
        'Led a team of several developers',
        'Organized hackathons and events',
        'Provided mentorship and guidance to new members',
        'Created a functional frontend website',
        'Implemented a CI/CD pipeline',
      ],
    }
  ],
  projects: [
    {
      title: "Algorithm Visualizer",
      description: "A web application that visualizes various sorting and pathfinding algorithms in real-time, helping users understand how different algorithms work.",
      tags: ["JavaScript", "Algorithms", "Data Structures", "Visualization"],
      link: "https://github.com/garvit-exe/algorithm-visualizer",
      link2: "https://visualizeralgorithm.netlify.app/",
      imageUrl: "/projects/algorithm-visualizer.jpg"
    },
    {
      title: "Electronic Document Management System",
      description: "A comprehensive document management system built with modern web technologies, featuring secure document storage, version control, and collaboration tools.",
      tags: ["PHP", "PHPMyAdmin", "MySQL", "Web Development", "Authentication", "JQuery", "AJAX"],
      link: "https://github.com/garvit-exe/electronic-Document-Management-System",
      imageUrl: "/projects/edms.jpg"
    },
    {
      title: "AliceAI - AI Assistant",
      description: "A conversational AI assistant, capable of natural language understanding and task automation.",
      tags: ["Python", "OCR", "NLP", "API Integration", "Automation", "Speech Recognition", "Text-to-Speech", "Image Processing", "Web Scraping", "Speech Synthesis"],
      link: "https://github.com/garvit-exe/AliceAI",
      link2: "https://docs.google.com/document/d/1jJStDdaVN6qvHryI5fAKuO8D4kB7DKy2/edit?usp=sharing&ouid=109342592180633449781&rtpof=true&sd=true",
      imageUrl: "/projects/aliceai.jpg"
    },
    {
      title: "ZIP Tool",
      description: "A command-line utility for file compression and archiving, implementing various compression algorithms for efficient file storage.",
      tags: ["JavaScript", "File Compression", "CLI", "Systems Programming"],
      link: "https://github.com/garvit-exe/zip-tool",
      link2: "https://www.npmjs.com/package/@garvit-budhiraja/zip-tool",
      imageUrl: "/projects/zip-tool.jpg"
    },
    {
      title: "Git Local Stats",
      description: "A Go-based CLI tool for analyzing local git repository statistics and metrics, providing insights into coding patterns and repository health.",
      tags: ["Go", "Git", "CLI", "Analytics"],
      link: "https://github.com/garvit-exe/git-local-stats",
      imageUrl: "/projects/git-local-stats.jpg"
    },
    {
      title: "Video Games Analysis",
      description: "A data analysis project exploring video game sales, trends, and player behavior using Python and data science tools.",
      tags: ["Python", "Data Analysis", "Pandas", "Visualization"],
      link: "https://github.com/garvit-exe/video-games-analysis",
      link2: "https://garvitbudhiraja.netlify.app/blog/the-evolution-of-video-game-sales-a-four-decade-analysis-1980-2020",
      imageUrl: "/projects/vga.png"
    },
    {
      title: "Sudoku Solver",
      description: "An efficient Sudoku puzzle solver implementing backtracking algorithm with a clean web interface.",
      tags: ["JavaScript", "Webpack", "Algorithms", "Problem Solving"],
      link: "https://github.com/garvit-exe/sudoku-solver",
      link2: "https://visual-sudoku.vercel.app/",
      imageUrl: "/projects/sudoku-solver.gif"
    },
    {
      title: "Terminal Portfolio",
      description: "A unique command-line interface portfolio website that showcases projects and skills in a terminal-like environment.",
      tags: ["JavaScript", "Terminal UI", "Web Design"],
      link: "https://github.com/garvit-exe/terminal-portfolio",
      link2: "garvit-exe.github.io/terminal-portfolio",
      imageUrl: "/projects/terminal-portfolio.jpg"
    },
    {
      title: "Wake on LAN",
      description: "A network utility tool that enables remote wake-up of computers using the Wake-on-LAN protocol.",
      tags: ["C++", "Networking", "Systems Programming"],
      link: "https://github.com/garvit-exe/Program-using-Wake-on-LAN-protocol-to-remote-power-On-a-PC",
      imageUrl: "/projects/wol.jpg"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "Go", "Swift"]
    },
    {
      category: "Frameworks and Libraries",
      items: ["React", "Next.js", "Node.js (Runtime)", "Express", "Tailwind CSS", "Flask"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Shell", "Linux", "Vercel", "Qt"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "SQLite", "PHPMyAdmin", "Oracle SQL Developer"]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Vellore Institute of Technology',
      period: '2022 - 2026',
    },
  ],
  certifications: [
    {
      name: 'Cloud Computing',
      issuer: 'NPTEL',
      year: 2024
    },
    {
      name: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      year: 2024
    },
    {
      name: 'Geodata Processing using Python',
      issuer: 'ISRO',
      year: 2024
    },
    {
      name: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      year: 2023
    }
  ],
  interests: [
    'Open Source Development',
    'Cloud Architecture',
    'UI/UX Design',
    'Machine Learning',
  ],
}
