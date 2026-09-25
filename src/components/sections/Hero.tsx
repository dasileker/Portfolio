import {
  Activity,
  ArrowDownRight,
  Boxes,
  Gauge,
  GitPullRequest,
  Linkedin,
  Network,
  ScanSearch,
} from "lucide-react";
import { QualitySignalGraph } from "@/components/diagrams/EngineeringVisuals";
import { capabilities, profile } from "@/content/profile";

const capabilityIcons = [ScanSearch, Boxes, Network, Gauge, GitPullRequest, Activity, Boxes];

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Quality engineering · Automation · Performance</p>
            <h1 id="hero-title">{profile.statement}</h1>
            <p className="hero-intro">{profile.introduction}</p>
            <p className="hero-detail">{profile.detail}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore engineering work <ArrowDownRight size={18} />
              </a>
              <a
                className="button button-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <dl className="hero-status">
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Current</dt>
                <dd>{profile.currentCompany}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Quality Engineering</dd>
              </div>
            </dl>
          </div>
          <div className="hero-visual">
            <div className="visual-label">
              <span className="live-dot" />
              Quality signal / live
            </div>
            <QualitySignalGraph />
          </div>
        </div>
      </section>
      <section className="capability-strip" aria-label="Core capabilities">
        <div className="container capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index];
            return (
              <div key={capability}>
                <Icon size={17} aria-hidden="true" />
                <span>{capability}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
