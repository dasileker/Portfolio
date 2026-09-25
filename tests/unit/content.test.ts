import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/caseStudies";
import { certifications } from "@/content/certifications";
import { experiences } from "@/content/experience";

describe("public portfolio content", () => {
  it("keeps planned Yakeey automation explicitly planned", () => {
    const automation = caseStudies.find((study) => study.slug === "scalable-automation");
    expect(automation?.status).toBe("planned");
  });

  it("identifies exactly one current primary role", () => {
    expect(experiences.filter((experience) => experience.current)).toHaveLength(1);
    expect(experiences.find((experience) => experience.current)?.company).toBe("Yakeey");
  });

  it("does not invent an issue date for undated credentials", () => {
    const undated = certifications.filter((certification) => !certification.issued);
    expect(undated.map((certification) => certification.name)).toEqual([
      "Full Stack Web Developer",
      "React Redux",
    ]);
  });
});
