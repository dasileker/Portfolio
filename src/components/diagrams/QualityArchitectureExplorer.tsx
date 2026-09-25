"use client";

import { useState } from "react";

const modes = {
  UI: {
    description: "Browser and mobile journeys prove critical customer behavior.",
    active: ["User", "Web / Mobile"],
    signal: "E2E",
  },
  API: {
    description: "Contracts and service behavior provide fast, focused evidence.",
    active: ["API", "Services"],
    signal: "Contract",
  },
  DATA: {
    description: "Persisted state confirms business outcomes beyond the interface.",
    active: ["Services", "Database"],
    signal: "State",
  },
  "CI/CD": {
    description: "Targeted checks become visible gates close to each change.",
    active: ["Web / Mobile", "API", "Services"],
    signal: "Gate",
  },
  PERFORMANCE: {
    description: "Modeled traffic enters the system while telemetry exits to observability.",
    active: ["API", "Services", "Database", "Observability"],
    signal: "p95",
  },
} as const;

type Mode = keyof typeof modes;
const system = ["User", "Web / Mobile", "API", "Services", "Database", "Observability"];

export function QualityArchitectureExplorer() {
  const [activeMode, setActiveMode] = useState<Mode>("UI");
  const mode = modes[activeMode];

  return (
    <div className="architecture-explorer">
      <div className="architecture-tabs" role="tablist" aria-label="Quality architecture layers">
        {(Object.keys(modes) as Mode[]).map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={activeMode === name}
            aria-controls="architecture-panel"
            id={`architecture-${name.replace("/", "-")}`}
            onClick={() => setActiveMode(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div
        id="architecture-panel"
        className="architecture-panel"
        role="tabpanel"
        aria-labelledby={`architecture-${activeMode.replace("/", "-")}`}
      >
        <div className="architecture-system">
          {system.map((node, index) => (
            <div className="architecture-step" key={node}>
              <span className={mode.active.includes(node as never) ? "is-active" : ""}>{node}</span>
              {index < system.length - 1 && <i aria-hidden="true">↓</i>}
            </div>
          ))}
        </div>
        <div className="architecture-copy" aria-live="polite">
          <span className="status-badge current">{mode.signal}</span>
          <h3>{activeMode} quality signal</h3>
          <p>{mode.description}</p>
        </div>
      </div>
    </div>
  );
}
