import type { CaseStudy } from "@/types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    slug: "risk-engineering",
    title: "Quality Strategy & Risk Engineering",
    subtitle: "Prioritize the failures that matter.",
    context:
      "Defining testing around business risk, critical journeys, system behavior, and release confidence rather than maximizing raw test counts.",
    approach: [
      "Business-critical journey identification",
      "Risk-based test planning",
      "Regression and exploratory strategy",
      "Release criteria and defect prioritization",
      "Testability and cross-team standards",
    ],
    technologies: ["Risk analysis", "Exploratory testing", "Quality strategy"],
    visual: "risk",
    confidential: false,
    status: "current",
  },
  {
    slug: "scalable-automation",
    title: "Scalable Test Automation",
    subtitle: "Maintainable feedback as products grow.",
    context:
      "Designing reusable, environment-aware automation with meaningful categorization, reliable diagnostics, and CI/CD integration.",
    approach: [
      "Reusable architecture and fixtures",
      "Test isolation and data strategy",
      "Smoke/regression separation",
      "API-assisted setup and targeted execution",
      "Reporting and failure diagnostics",
    ],
    technologies: ["Playwright", "Selenium", "Appium", "TypeScript"],
    visual: "automation",
    company: "Yakeey",
    confidential: false,
    status: "planned",
  },
  {
    slug: "api-backend-quality",
    title: "API & Backend Quality",
    subtitle: "Validate beyond the interface.",
    context:
      "Validating contracts, authentication, business rules, and persisted data through APIs and databases—not only through UI behavior.",
    approach: [
      "REST and OpenAPI contract checks",
      "Negative and payload validation",
      "OIDC / Keycloak authentication",
      "PostgreSQL and MongoDB data validation",
      "Identifier and state-transition tracing",
    ],
    technologies: ["Postman", "Swagger", "REST", "PostgreSQL", "MongoDB"],
    visual: "api",
    confidential: false,
    status: "current",
  },
  {
    slug: "performance-engineering",
    title: "Performance & Load Engineering",
    subtitle: "Model real behavior before scaling load.",
    context:
      "Designing performance tests around realistic traffic, system behavior, and business risk rather than simply generating high traffic.",
    approach: [
      "Baseline, load, stress, and spike scenarios",
      "Ramp and arrival-rate modeling",
      "Latency percentiles and thresholds",
      "Throughput and error analysis",
      "Observability and CI integration",
    ],
    technologies: ["k6", "Grafana", "APM", "GitLab CI/CD", "JMeter"],
    visual: "performance",
    company: "Yakeey",
    confidential: true,
    status: "current",
  },
  {
    slug: "quality-gates",
    title: "CI/CD & Quality Gates",
    subtitle: "Move feedback closer to change.",
    context:
      "Bringing validation closer to code changes through environment-aware pipelines, targeted execution, and visible release gates.",
    approach: [
      "Merge-request validation",
      "Smoke and regression stages",
      "Artifacts and environment configuration",
      "Changed-area targeting",
      "Deployment confidence",
    ],
    technologies: ["GitLab CI/CD", "Playwright", "k6", "Git"],
    visual: "pipeline",
    confidential: false,
    status: "planned",
  },
];

export const yakeeyContributions = [
  "Define risk-based QA approaches for business-critical Marketplace and YakeeyPro workflows.",
  "Map property journeys across customer applications, agent workflows, Back Office, and backend services.",
  "Investigate product, API, and data inconsistencies through exploratory and end-to-end validation.",
  "Use Swagger, Postman, OIDC/Keycloak, PostgreSQL, and MongoDB to validate beyond the UI.",
  "Design reusable automation standards, smoke/regression strategy, and future CI/CD quality gates.",
  "Support and mentor additional QA capacity as the quality practice grows.",
];

export const journeySteps = [
  "Contact",
  "Property",
  "Details",
  "Mandate",
  "E-signature",
  "Documents",
  "Back Office",
  "Publication",
  "Search",
  "Visits",
];

export const roadmapSteps = [
  "Discover",
  "Baseline",
  "Stabilize revamp",
  "Automate critical UI",
  "API / data cross-check",
  "CI quality gates",
  "Retire legacy coverage",
];
