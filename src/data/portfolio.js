/*

a single JS file that holds all your personal content 
think of it as your portfolio's "database". Instead of hardcoding your name, projects, and skills scattered across 5 different components,
you write them once here and import them wherever needed.

*/

// src/data/portfolio.js

import project1Img from "../assets/project1.png";

export const profile = {
  name: "Sarvika Sharma",
  title: "Computer Science Student",
  university: "BITS, Pilani",
  year: "2025 - 2029",
  track: "BS in Computer Science",
  headline: "Building technology, communities, and experiences.",
  bio: "CS & AI undergrad navigating the wild world of tech, one crash and compile at a time! I thrive in environments where exploration meets hands-on problem solving.  Programming challenges me to think logically while fueling my curiosity about how systems work. My goal is to create meaningful and intuitive user experiences through purposeful, well-crafted technology. ",
  github: "https://github.com/sarvieka2407",
  linkedin: "https://www.linkedin.com/in/sarvieka/",
  email: "sarvieka@email.com"
}

export const skills = {
  languages: ["Python", "Java", "JavaScript", "SQL"],
  frameworks: ["React", "Node.js", "Tailwind CSS", "Express"],
  tools: ["Git", "Figma", "Docker", "VS Code"]
};

export const projects = [
  {
    name: "Incidents Dashbaord",
    description: "Built a full-stack platform that monitors outages across major cloud providers like AWS, GitHub, Datadog, and Cloudflare by pulling live incident data from RSS feeds and status pages. The system intelligently aggregates and deduplicates incidents in real-time, then uses OpenAI API to automatically summarize technical outages into simple, unjargonized explanations and assign severity levels. Created an intuitive React dashboard where teams can search, filter, and explore incidents by provider, severity, and timeline—turning scattered status pages into one unified, AI-powered command center. The platform prevents duplicate storage through smart matching logic, making incident tracking effortless for DevOps and SRE teams. ",
    stack: ["Python", "FastAPI", "SQLite", "React"],
    year: "2026",
    github: "https://github.com/sarvieka2407/IncidentDashboard",
    live: "https://yourproject.com",  // or null if no live link
    image: project1Img,
    status: "Work in Progress"
  },

]

// src/data/portfolio.js
export const journey = {

  education: [
    {
      degree: "BITS, Pilani",
      university: "Bachelor of Science in Computer Science",
      duration: "2025 - 2029",
      core: []
    },
    {
      degree: "Scaler School of Technology",
      university: "Computer Science & Artifical Intelligence",
      duration: "2025 - 2029",
      core: []
    }
  ],

  experience: [
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      duration: "May 2026 — Aug 2026",
      description: "Contributed to open-source projects through feature development, bug fixes, and community collaboration, leveraging Git-based workflows and peer code reviews.",
      skills: ["React", "Node.js", "Performance Optimization", "Open Source Contribution"],
        archive: [
    {
      type: "null",
      title: "null",
      image: "null",
      link: "null"
    },
    {
      type: "null",
      title:"null",
      image: "null",
      link: "null"
    }
  ]
    },


  ],

  leadership: [
    {
      role: "Core Team - Events and Ops",
      organization: "Scaler Innovation Labs",
      description: "Led operational planning for hackathons and flagship community initiatives. Hosted and coordinated sessions with industry leaders, including founders, CTOs, and engineers from leading technology companies. Curated and maintained the SIL newsletter, highlighting student startups, milestones, and innovation across the community.",
      skills: ["Event Planning", "Commununity Building", "Public Speaking", "Content Writing", "Networking", "Hospitality"],
      duration: "Mar 2026 — Present",
      events: "20+ Events",
      workshops: "30+ Workshops",
          proofImages: [
      {
        image: "/proofs/hosting.jpeg",
        caption: "Hosted Super Mentor Session    Taran Mall • Handa Uncle, Ex-Amazon, AWS, Meta"
      },
      {
        image: "/proofs/anchoring.JPG",
        caption: "Anchored Super Mentor Session   Muthumari S • Global Head, AI Studio, Brillio"
      },
      {
        image: "/proofs/monad.jpeg",
        caption: "Monad Blitz V4 Hackathon 2026  Organizing Team"
      },
      {
        image: "/proofs/bitsaa.jpeg",
        caption: "BITSAA Bangalore Buildathon 2026   Organizing Team"
      }
    ]
    },

    {
      role: "Team Lead - Sponsorships Dept.",
      organization: "ASCENT 2026 (Flagship TechFest)",
      description: "Led sponsorship outreach initiatives for SST's flagship technology festival. Engaged with 150+ companies and industry partners, securing sponsorships from 10+ organizations. Coordinated stakeholder communication, partnership discussions, and sponsorship negotiations to support large-scale event execution.",
      skills: ["Partnerships", "Negotiation", "Strategic Outreach", "Communication", "Networking"],
      duration: "Mar 2026 — May 2026",
      events: "10+ Events",
      workshops: "8+ Workshops",
          proofImages: [
      {
        image: "/proofs/ascent1.jpeg",
        caption: "Hosted Engineering AMA"
      },
      {
        image: "/proofs/ascent2.jpeg",
        caption: "Hackathon Operations"
      },
      {
        image: "/proofs/ascent3.jpeg",
        caption: "Speaker Session"
      }
    ]
    },
  ],

  achievements: [

  ],
};