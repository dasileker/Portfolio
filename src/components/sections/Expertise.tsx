import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/content/skills";

export function Expertise() {
  return (
    <section className="section section-teal" id="expertise" aria-labelledby="expertise-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="04"
            label="Expertise"
            title="Tools support the strategy — they aren’t the strategy."
            description="A working toolkit organized by where it creates evidence, not by arbitrary proficiency percentages."
          />
        </Reveal>
        <div className="expertise-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="expertise-card" key={group.title} delay={(index % 3) * 0.05}>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <div className="tool-group">
                <p>Core / current</p>
                <ul>
                  {group.primary.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              {group.supporting && (
                <div className="tool-group supporting">
                  <p>Supporting / previous</p>
                  <ul>
                    {group.supporting.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="skill-context">{group.context}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
