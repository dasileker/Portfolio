import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="contact-inner">
          <p className="eyebrow">08 / Contact</p>
          <h2 id="contact-title">Let’s talk about Quality Engineering.</h2>
          <p>
            Open to conversations around Quality Engineering, QA leadership, automation,
            performance testing, and selected technical consulting opportunities.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Email
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
          <div className="contact-meta">
            <span>
              <MapPin size={15} /> {profile.location}
            </span>
            <span>{profile.email}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
