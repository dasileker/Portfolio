import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <section className="section section-violet" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="03"
            label="Experience"
            title="From hands-on testing to Quality Engineering leadership."
            description="Overlapping roles are intentional: development, mentoring, consulting, and quality work strengthened one another."
          />
        </Reveal>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal className="timeline-row" key={`${experience.company}-${experience.role}`}>
              <div className="timeline-date">
                <span>{experience.startDate}</span>
                <span>{experience.current ? "Present" : experience.endDate}</span>
              </div>
              <span className={`timeline-node${experience.current ? " is-current" : ""}`} />
              <article className="experience-card">
                <header>
                  <div className="company-wordmark" aria-label={`${experience.company} logo fallback`}>
                    {experience.company}
                  </div>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                </header>
                <p className="experience-category">{experience.category.replace("-", " ")}</p>
                <h3>{experience.role}</h3>
                {experience.location && <p className="experience-location">{experience.location}</p>}
                <p>{experience.description}</p>
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul className="tag-list" aria-label={`${experience.company} technologies`}>
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {experience.current && (
                  <a className="text-link" href="#yakeey">
                    Explore current work <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
