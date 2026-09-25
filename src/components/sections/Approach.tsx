import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachSteps, principles } from "@/content/skills";

export function Approach() {
  return (
    <section className="section section-lime" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="05"
            label="Approach"
            title="Quality should be designed into delivery."
          />
        </Reveal>
        <Reveal>
          <ol className="approach-path" aria-label="Quality engineering process">
            {approachSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <Reveal className="principle-card" key={principle.title} delay={(index % 3) * 0.05}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
