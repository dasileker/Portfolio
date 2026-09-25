import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";
import { EngineeringWork } from "@/components/sections/EngineeringWork";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Yakeey } from "@/components/sections/Yakeey";
import { profile } from "@/content/profile";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Senior QA Automation Engineer",
    worksFor: { "@type": "Organization", name: "Yakeey" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    sameAs: [profile.linkedin, profile.github],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Microverse" },
      { "@type": "EducationalOrganization", name: "Udacity" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} · Quality Engineering`,
    url: "https://zerradi.web.app",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content">
        <Hero />
        <About />
        <EngineeringWork />
        <Yakeey />
        <Experience />
        <Expertise />
        <Approach />
        <Background />
        <Contact />
      </main>
    </>
  );
}
