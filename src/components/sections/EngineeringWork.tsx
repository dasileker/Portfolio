import {
  ApiDataFlow,
  CiPipeline,
  LoadCurve,
  RiskMatrix,
} from "@/components/diagrams/EngineeringVisuals";
import { QualityArchitectureExplorer } from "@/components/diagrams/QualityArchitectureExplorer";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/content/caseStudies";
import type { CaseStudy } from "@/types/portfolio";

function AutomationVisual() {
  return (
    <div className="automation-visual" aria-label="Layered test automation architecture">
      <div>
        <span>Tests</span>
        <span>Smoke · Regression · Targeted</span>
      </div>
      <div>
        <span>Foundation</span>
        <span>Fixtures · Data · Config</span>
      </div>
      <div>
        <span>Delivery</span>
        <span>Reports · CI · Diagnostics</span>
      </div>
    </div>
  );
}

function StudyVisual({ study }: { study: CaseStudy }) {
  switch (study.visual) {
    case "risk":
      return <RiskMatrix />;
    case "automation":
      return <AutomationVisual />;
    case "api":
      return <ApiDataFlow />;
    case "performance":
      return <LoadCurve />;
    case "pipeline":
      return <CiPipeline />;
  }
}

export function EngineeringWork() {
  return (
    <section className="section section-blue" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="02"
            label="Engineering work"
            title="Quality across the delivery lifecycle."
            description="Selected areas of engineering work covering strategy, automation, backend validation, CI/CD, and performance."
          />
        </Reveal>
        <div className="work-grid">
          {caseStudies.map((study, index) => (
            <Reveal
              key={study.slug}
              className={`work-card work-card-${study.visual}${index === 0 ? " work-card-feature" : ""}`}
              delay={Math.min(index * 0.05, 0.2)}
            >
              <article>
                <header>
                  <div>
                    <span className={`status-badge ${study.status}`}>{study.status}</span>
                    {study.company && <span className="company-badge">{study.company}</span>}
                  </div>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                </header>
                <div className="work-card-copy">
                  <p className="card-kicker">{study.subtitle}</p>
                  <h3>{study.title}</h3>
                  <p>{study.context}</p>
                  {study.slug === "scalable-automation" && (
                    <p className="accuracy-note">
                      At Yakeey, UI automation is intentionally sequenced after the Marketplace and
                      YakeeyPro revamps reach sufficient stability.
                    </p>
                  )}
                </div>
                <StudyVisual study={study} />
                <ul className="chip-list" aria-label={`${study.title} areas`}>
                  {study.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="architecture-block">
          <div className="architecture-intro">
            <p className="eyebrow">Signature system view</p>
            <h3>Quality Architecture Explorer</h3>
            <p>
              Select a quality layer to see where evidence is gathered across the engineering
              system.
            </p>
          </div>
          <QualityArchitectureExplorer />
        </Reveal>
      </div>
    </section>
  );
}
