import { CareerSignal } from "@/components/diagrams/EngineeringVisuals";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section className="section section-cyan" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title="Engineering background. Quality-first mindset."
          />
        </Reveal>
        <div className="about-layout">
          <Reveal className="prose-large">
            <p>
              My professional journey spans software testing, full-stack development, QA
              automation, and quality leadership.
            </p>
            <p>
              Starting with hands-on application testing and later moving into software
              development gave me the ability to approach QA from both sides of the engineering
              lifecycle: understanding how products are built and understanding how they fail.
            </p>
            <p>
              Today, my work is increasingly focused on Quality Engineering—defining risk-based
              approaches, designing automation strategy, validating APIs and data, integrating
              quality with delivery pipelines, and applying performance testing to real system
              behavior.
            </p>
            <p>
              I work with developers, Product, DevOps, and engineering leadership to improve not
              only test coverage, but release confidence and the overall quality process.
            </p>
          </Reveal>
          <Reveal className="career-panel" delay={0.08}>
            <div className="panel-kicker">Career signal</div>
            <CareerSignal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
