import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Test Automation",
    primary: ["Playwright", "Selenium"],
    supporting: ["Appium", "Cypress", "Espresso"],
    context: "Layered automation selected for product risk, stability, and feedback speed.",
  },
  {
    title: "API & Backend Quality",
    primary: ["Postman", "Swagger / OpenAPI", "REST APIs"],
    supporting: ["OAuth / OIDC", "Keycloak"],
    context: "Contract, authentication, negative-path, and business-rule validation.",
  },
  {
    title: "Performance & Observability",
    primary: ["k6", "Grafana", "APM"],
    supporting: ["JMeter"],
    context: "Traffic modeling, thresholds, latency percentiles, and system evidence.",
  },
  {
    title: "CI/CD & Engineering",
    primary: ["GitLab CI/CD", "Git"],
    supporting: ["Jenkins", "Docker"],
    context: "Quality gates and targeted suites integrated near code changes.",
  },
  {
    title: "Data",
    primary: ["PostgreSQL", "MongoDB"],
    supporting: ["MySQL", "SQL"],
    context: "Persisted-state checks, identifier tracing, and CRUD integrity.",
  },
  {
    title: "Programming",
    primary: ["JavaScript", "TypeScript"],
    supporting: ["Java", "Ruby", "Ruby on Rails"],
    context: "Development foundations applied to automation and failure investigation.",
  },
  {
    title: "Cloud Environments",
    primary: ["AWS", "Azure"],
    context: "Previous QA and environment experience—not cloud-architecture specialization.",
  },
];

export const approachSteps = [
  "Understand",
  "Assess risk",
  "Design",
  "Validate",
  "Automate",
  "Integrate",
  "Observe",
  "Improve",
];

export const principles = [
  {
    title: "Risk before coverage",
    text: "Test count is not the objective. Coverage should prioritize failures with meaningful business, customer, or technical impact.",
  },
  {
    title: "Automate at the right layer",
    text: "UI automation matters, but APIs, integration tests, and data checks often provide faster and more reliable feedback.",
  },
  {
    title: "Automate for return",
    text: "Automation timing should reflect product stability, business risk, and expected maintenance value.",
  },
  {
    title: "Move feedback closer",
    text: "Smoke suites, targeted execution, and CI/CD gates reduce the distance between introducing and understanding a defect.",
  },
  {
    title: "Measure before scaling",
    text: "Performance engineering begins with baselines, realistic traffic assumptions, and observability.",
  },
];
