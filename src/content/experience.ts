import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    company: "Yakeey",
    role: "Senior QA Automation Engineer",
    startDate: "July 2026",
    current: true,
    location: "Casablanca, Morocco",
    description:
      "Working across Quality Engineering for Yakeey’s Marketplace and YakeeyPro products, combining hands-on product discovery with the design of longer-term QA automation and testing practices.",
    highlights: [
      "Structure risk-based QA approaches for critical Marketplace and YakeeyPro workflows.",
      "Map end-to-end journeys across customer applications, agent workflows, Back Office, APIs, and data.",
      "Design automation foundations, smoke/regression strategy, and CI/CD quality gates for upcoming revamps.",
      "Support reusable QA standards and additional quality capacity across product teams.",
    ],
    technologies: [
      "QA Strategy",
      "Playwright",
      "Postman",
      "k6",
      "GitLab",
      "PostgreSQL",
      "MongoDB",
      "Grafana",
    ],
    category: "quality-engineering",
  },
  {
    company: "Guidepoint",
    role: "Technical Consultant / Expert Advisor",
    startDate: "Ongoing",
    endDate: "Project-based",
    description:
      "Participate in selected hourly expert consultations for international clients on software quality, engineering tooling, QA processes, and technology platforms.",
    highlights: [
      "Software quality and QA automation",
      "Engineering workflows and test tooling",
      "API and platform considerations",
    ],
    technologies: ["Advisory", "Quality Engineering", "NDA-safe"],
    category: "consulting",
  },
  {
    company: "Billo",
    role: "QA Lead",
    startDate: "May 2023",
    endDate: "July 2026",
    description:
      "Led quality activities across web and mobile products, combining hands-on testing, automation, and team-level QA responsibility.",
    highlights: [
      "Oversaw functional, regression, and API testing across web, iOS, and Android.",
      "Built and maintained Selenium and Appium automation.",
      "Collaborated on defect investigation, release confidence, and QA mentoring.",
    ],
    technologies: [
      "Selenium",
      "Appium",
      "Postman",
      "Java",
      "Web",
      "iOS",
      "Android",
      "Azure",
      "AWS",
    ],
    category: "quality-engineering",
  },
  {
    company: "ISC-CX",
    role: "Full-Stack Developer / Ruby on Rails Consultant",
    startDate: "December 2022",
    endDate: "February 2023",
    description:
      "Worked on maintenance and feature development in a Ruby on Rails application while integrating Selenium validation around new functionality.",
    highlights: ["Application maintenance", "Feature delivery", "Regression support"],
    technologies: ["Ruby on Rails", "Selenium"],
    category: "software-engineering",
  },
  {
    company: "VO2 Group",
    role: "Full-Stack Developer",
    startDate: "September 2022",
    endDate: "November 2022",
    description:
      "Contributed to the EcoAct project through calculation improvements, CSV export functionality, and automated validation around delivered features.",
    highlights: ["Calculation improvements", "CSV exports", "Automated validation"],
    technologies: ["Ruby", "Ruby on Rails", "Automation"],
    category: "software-engineering",
  },
  {
    company: "Microverse",
    role: "Technical Support Engineer / Mentor",
    startDate: "December 2020",
    endDate: "August 2023",
    description:
      "Supported developers in a remote full-stack program through technical assistance, code review, debugging, and mentorship.",
    highlights: ["Technical support", "Code reviews", "Debugging", "Mentoring"],
    technologies: ["JavaScript", "React", "Ruby", "Rails", "Git"],
    category: "mentoring",
  },
  {
    company: "Appen Connect",
    role: "Freelance Web Developer",
    startDate: "July 2019",
    endDate: "June 2021",
    description:
      "Worked across distributed data and web projects involving AI-related datasets, speech workflows, localization, and automated output validation.",
    highlights: ["Data validation", "Speech workflows", "Localization", "Automation"],
    technologies: ["Web", "AI datasets", "Validation"],
    category: "software-engineering",
  },
  {
    company: "Testbirds",
    role: "Freelance Application Tester",
    startDate: "June 2015",
    endDate: "June 2019",
    description:
      "Early professional testing experience across applications and websites, covering usability, compatibility, functional behavior, and defect discovery.",
    highlights: [
      "10,000+ testing hours reported across Testbirds assignments.",
      "Exploratory, usability, cross-browser, web, and mobile testing.",
    ],
    technologies: ["Exploratory Testing", "Web", "Mobile", "Defect Reporting"],
    category: "quality-engineering",
  },
];
