import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education } from "@/content/certifications";
import { projects } from "@/content/projects";

export function Background() {
  return (
    <section className="section section-violet background-section" id="background">
      <div className="architecture-lattice" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeading
            index="06"
            label="Engineering foundation"
            title="Quality engineering built on a development foundation."
            description="Before specializing primarily in QA, I trained and worked across JavaScript, React, Ruby, and Ruby on Rails. That context still shapes how I design automation, investigate backend behavior, and collaborate with developers."
          />
        </Reveal>
        <div className="project-heading">
          <p className="eyebrow">Early development work · 2020–2021</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal className="project-card" key={project.title} delay={(index % 4) * 0.05}>
              <span className="card-index">{project.year}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                View on GitHub <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="education-heading">
          <SectionHeading
            index="07"
            label="Education & learning"
            title="A foundation kept current through practice."
          />
        </Reveal>
        <div className="education-layout">
          <div className="education-list">
            {education.map((item) => (
              <Reveal className="education-card" key={item.school}>
                <p className="eyebrow">{item.dates}</p>
                <h3>{item.school}</h3>
                <strong>{item.program}</strong>
                <p>{item.description}</p>
                <ul className="tag-list">
                  {item.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="credential-grid">
            {certifications.map((certification) => (
              <Reveal className="credential-card" key={`${certification.issuer}-${certification.name}`}>
                <span>{certification.category}</span>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                {certification.issued && <time>{certification.issued}</time>}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
