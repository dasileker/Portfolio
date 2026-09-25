import {
  AutomationRoadmap,
  E2EJourneyMap,
  LoadCurve,
} from "@/components/diagrams/EngineeringVisuals";
import { Reveal } from "@/components/motion/Reveal";
import { yakeeyContributions } from "@/content/caseStudies";

export function Yakeey() {
  return (
    <section className="section yakeey-section" id="yakeey" aria-labelledby="yakeey-title">
      <div className="container">
        <Reveal className="yakeey-header">
          <div className="yakeey-identity">
            <p className="eyebrow">Current / 2026</p>
            <div className="wordmark" aria-label="Yakeey">
              Yakeey<span>.</span>
            </div>
            <h2 id="yakeey-title">Quality engineering in a connected property platform.</h2>
          </div>
          <div className="role-card">
            <span className="live-dot" />
            <p>Senior QA Automation Engineer</p>
            <strong>July 2026 — Present</strong>
            <span>Casablanca, Morocco</span>
          </div>
        </Reveal>

        <div className="yakeey-overview">
          <Reveal className="prose-large">
            <p>
              Working across Quality Engineering for Yakeey’s Marketplace and YakeeyPro products,
              combining hands-on product discovery with the design of longer-term QA automation
              and testing practices.
            </p>
          </Reveal>
          <Reveal>
            <ul className="contribution-list">
              {yakeeyContributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="yakeey-modules">
          <Reveal className="yakeey-module journey-module">
            <header>
              <span>01 / Product discovery</span>
              <h3>Marketplace / YakeeyPro E2E Discovery</h3>
              <p>
                Mapped critical real-estate journeys from contact and property creation through
                validation, publication, and downstream marketplace behavior.
              </p>
            </header>
            <E2EJourneyMap />
            <ul className="chip-list">
              {[
                "Manual E2E discovery",
                "Business rules",
                "API investigation",
                "Data investigation",
                "Risk-based regression",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="yakeey-module performance-module">
            <header>
              <span>02 / Performance foundation</span>
              <h3>Marketplace performance testing</h3>
              <p>
                Designed a k6 foundation for public Marketplace APIs with baseline, expected-load,
                stress, and spike patterns connected to observability.
              </p>
            </header>
            <LoadCurve />
            <p className="security-note">
              Public case-study view: private URLs, limits, credentials, dashboards, and production
              data are intentionally excluded.
            </p>
          </Reveal>

          <Reveal className="yakeey-module roadmap-module">
            <header>
              <span>03 / Automation roadmap</span>
              <h3>Stability before scale</h3>
              <p>
                Automation is introduced according to product stability and business risk—not for
                appearance.
              </p>
            </header>
            <AutomationRoadmap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
